/* Hisab — theme toggle + footer year. Zero dependencies. */
(function(){try{
var root=document.documentElement;
function current(){var t=null;try{t=localStorage.getItem("hisab-theme");}catch(e){}return t==="light"?"light":"dark";}
function paint(){var t=current();root.dataset.theme=t;
  document.querySelectorAll("#themeToggle").forEach(function(b){
    var l=b.querySelector(".theme-label"),ic=b.querySelector(".theme-icon");
    if(l)l.textContent=(t==="light")?"Dark":"Light";
    if(ic)ic.textContent=(t==="light")?"\u263E":"\u263C";
  });}
document.querySelectorAll("#themeToggle").forEach(function(b){
  b.addEventListener("click",function(){var t=current()==="light"?"dark":"light";
    try{localStorage.setItem("hisab-theme",t);}catch(e){}paint();});});
paint();
var y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
}catch(e){}})();
