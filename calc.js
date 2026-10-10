/* Hisab shared calculator engine. Zero dependencies.
   Each page has one or more <form data-calc="name"> blocks.
   Inputs carry data-field="..."; results carry data-result="...".
   Results render into the closest .workspace scope. Recomputes on input. */
(function(){
"use strict";

var inr0=new Intl.NumberFormat("en-IN",{maximumFractionDigits:0});
var inr2=new Intl.NumberFormat("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2});
var num2=new Intl.NumberFormat("en-IN",{maximumFractionDigits:2});

var FMT={
  inr:function(v){return "\u20B9"+inr0.format(v);},
  inr2:function(v){return "\u20B9"+inr2.format(v);},
  num:function(v){return num2.format(v);},
  int:function(v){return inr0.format(Math.round(v));},
  pct:function(v){return num2.format(v)+" %";},
  yrs:function(v){return num2.format(v)+" yrs";}
};

function num(v){v=parseFloat(v);return Number.isFinite(v)?v:NaN;}
function ok(){for(var i=0;i<arguments.length;i++){if(!(arguments[i]>=0))return false;}return true;}

var CALC={
/* EMI: P*r*(1+r)^n / ((1+r)^n - 1), r = monthly rate */
emi:{run:function(v){
  var P=v.principal,i=v.rate/1200,n=Math.round(v.months);
  if(!(P>0)||!(n>0)||!(v.rate>=0))return null;
  var emi=i>0?P*i*Math.pow(1+i,n)/(Math.pow(1+i,n)-1):P/n;
  var total=emi*n;
  return{emi:[emi,"inr"],interest:[total-P,"inr"],total:[total,"inr"]};}},

/* SIP: annuity-due future value, monthly compounding */
sip:{run:function(v){
  var M=v.monthly,i=v.rate/1200,n=Math.round(v.years*12);
  if(!(M>0)||!(n>0)||!(v.rate>=0))return null;
  var fv=i>0?M*((Math.pow(1+i,n)-1)/i)*(1+i):M*n;
  var invested=M*n;
  return{maturity:[fv,"inr"],invested:[invested,"inr"],gains:[fv-invested,"inr"]};}},

/* FD: P*(1+r/f)^(f*t) */
fd:{run:function(v){
  var P=v.principal,r=v.rate,t=v.years,f=v.freq;
  if(!(P>0)||!(t>0)||!(r>=0)||!(f>0))return null;
  var fv=P*Math.pow(1+r/(100*f),f*t);
  return{maturity:[fv,"inr"],invested:[P,"inr"],interest:[fv-P,"inr"]};}},

/* RD: monthly deposits, quarterly compounding via effective monthly rate */
rd:{run:function(v){
  var M=v.monthly,r=v.rate,n=Math.round(v.years*12);
  if(!(M>0)||!(n>0)||!(r>=0))return null;
  var im=r>0?Math.pow(1+r/400,1/3)-1:0;
  var fv=im>0?M*((Math.pow(1+im,n)-1)/im)*(1+im):M*n;
  var invested=M*n;
  return{maturity:[fv,"inr"],invested:[invested,"inr"],interest:[fv-invested,"inr"]};}},

/* PPF: annuity-due, 15 years, user-editable assumed rate */
ppf:{run:function(v){
  var A=v.yearly,i=v.rate/100,n=15;
  if(!(A>0)||!(i>=0))return null;
  var fv=i>0?A*((Math.pow(1+i,n)-1)/i)*(1+i):A*n;
  var invested=A*n;
  return{maturity:[fv,"inr"],invested:[invested,"inr"],interest:[fv-invested,"inr"]};}},

/* Percentage: three independent modes */
pct1:{run:function(v){ /* X% of Y */
  if(!ok(v.x,v.y))return null;var r=v.x/100*v.y;return{answer:[r,"num"]};}},
pct2:{run:function(v){ /* X is what % of Y */
  if(!ok(v.x)||!(v.y>0))return null;return{answer:[v.x/v.y*100,"pct"]};}},
pct3:{run:function(v){ /* % change A -> B */
  if(!ok(v.a)||!(v.a!==0))return null;return{answer:[(v.b-v.a)/v.a*100,"pct"]};}},

/* Age: calendar-correct Y/M/D + next birthday + days lived */
age:{run:function(v){
  var s=v.birthdate;if(!s)return null;
  var b=new Date(s+"T00:00:00"),now=new Date();
  if(isNaN(b)||b>now)return null;
  var y=now.getFullYear()-b.getFullYear(),
      m=now.getMonth()-b.getMonth(),
      d=now.getDate()-b.getDate();
  if(d<0){m--;d+=new Date(now.getFullYear(),now.getMonth(),0).getDate();}
  if(m<0){y--;m+=12;}
  var nb=new Date(now.getFullYear(),b.getMonth(),b.getDate());
  if(nb<=now)nb=new Date(now.getFullYear()+1,b.getMonth(),b.getDate());
  var daysTo=Math.ceil((nb-now)/864e5);
  var lived=Math.floor((now-b)/864e5);
  return{years:[y,"int"],months:[m,"int"],days:[d,"int"],
         next:[daysTo,"int"],lived:[lived,"int"]};}},

/* CGPA <-> percentage (CBSE x9.5 convention) */
cgpa1:{run:function(v){if(!(v.cgpa>=0)||v.cgpa>10)return null;return{answer:[v.cgpa*9.5,"pct"]};}},
cgpa2:{run:function(v){if(!(v.pct>=0))return null;return{answer:[v.pct/9.5,"num"]};}},

/* BMI: kg / m^2 */
bmi:{run:function(v){
  var kg=v.weight,cm=v.height;
  if(!(kg>0)||!(cm>0))return null;
  var bmi=kg/Math.pow(cm/100,2);
  var cat=bmi<18.5?"Underweight":bmi<25?"Normal":bmi<30?"Overweight":"Obese";
  return{bmi:[bmi,"num"],category:[cat,"txt"]};}},

/* Discount */
discount:{run:function(v){
  var p=v.price,d=v.percent;
  if(!(p>=0)||!(d>=0)||d>100)return null;
  var f=p*(1-d/100);
  return{final:[f,"inr2"],save:[p-f,"inr2"]};}}
};

function render(scope,results){
  scope.querySelectorAll("[data-result]").forEach(function(el){
    var key=el.getAttribute("data-result"),txt="\u2014";
    if(results&&results[key]){
      var val=results[key][0],kind=results[key][1];
      txt=(kind==="txt")?String(val):(FMT[kind]||FMT.num)(val);
    }
    el.textContent=txt;
  });
}

document.querySelectorAll("form[data-calc]").forEach(function(form){
  var calc=CALC[form.getAttribute("data-calc")];
  if(!calc)return;
  var scope=form.closest(".workspace")||document;
  function update(){
    var vals={};
    form.querySelectorAll("[data-field]").forEach(function(el){
      vals[el.getAttribute("data-field")]=(el.type==="date")?el.value:num(el.value);
    });
    var out=null;
    try{out=calc.run(vals);}catch(e){out=null;}
    render(scope,out);
  }
  form.addEventListener("input",update);
  form.addEventListener("change",update);
  update();
});
})();
