/* Hisab page content — human voice edition.
   Copy is written like a smart friend explaining money, not a
   landing-page generator. Canonicals, OG URLs and JSON-LD keep the
   live https://hisab-58f.pages.dev/ values exactly. */

export interface FaqItem {
  q: string;
  a: string;
}

export interface FieldOption {
  value: string;
  label: string;
  selected?: boolean;
}

export interface FieldConfig {
  id: string;
  label: string;
  field: string;
  type: "number" | "date" | "select";
  value: string;
  min?: string;
  max?: string;
  step?: string;
  inputmode?: string;
  hint?: string;
  options?: FieldOption[];
  /** Birthdate max is "today" — computed at render instead of hardcoded. */
  dynamicMaxToday?: boolean;
}

/** One rendered row of fields (single field = full width). */
export type FieldRow = FieldConfig[];

export interface HeroPart {
  key: string;
  suffix?: string;
}

export interface ResultRow {
  label: string;
  key: string;
}

export interface WorkspaceConfig {
  calcName: string;
  formLabel: string;
  formHeading?: string;
  fieldRows: FieldRow[];
  heroLabel: string;
  heroParts: HeroPart[];
  rows: ResultRow[];
  note?: string;
}

export interface RelatedLink {
  href: string;
  label: string;
}

export interface PageContent {
  slug: string;
  /** JSON-LD script bodies — mirrored into each page's <head>. */
  jsonLd: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  /** Optional hand-stuck sticker note rendered near the calculator. */
  sticker?: string;
  /** 3-step "how this calculator works" strip (Site B pattern: numbered steps). */
  steps?: { t: string; d: string }[];
  workspaces: WorkspaceConfig[];
  explainHeading: string;
  explain: string[];
  faqHeading: string;
  faq: FaqItem[];
  related: RelatedLink[];
  disclaimer: string;
}

export const FOOTER_LINKS: RelatedLink[] = [
  { href: "emi-calculator.html", label: "EMI Calculator" },
  { href: "sip-calculator.html", label: "SIP Calculator" },
  { href: "fd-calculator.html", label: "FD Calculator" },
  { href: "rd-calculator.html", label: "RD Calculator" },
  { href: "ppf-calculator.html", label: "PPF Calculator" },
  { href: "percentage-calculator.html", label: "Percentage Calculator" },
  { href: "age-calculator.html", label: "Age Calculator" },
  { href: "cgpa-calculator.html", label: "CGPA Calculator" },
  { href: "bmi-calculator.html", label: "BMI Calculator" },
  { href: "discount-calculator.html", label: "Discount Calculator" },
];

export const DISCLAIMER_FINANCE =
  "Hisab is for planning and learning, not financial advice. Figures are estimates from standard formulas — for big decisions, talk to your bank or a qualified adviser, not a website.";
export const DISCLAIMER_FINANCE_MF =
  "Hisab is for planning and learning, not financial advice. Figures are estimates from standard formulas — for big decisions, talk to your bank or a qualified adviser, not a website. Mutual fund investments are subject to market risks; anyone promising 'assured returns' is selling something.";
export const DISCLAIMER_MEDICAL =
  "Hisab is for curiosity and planning, not medical advice. BMI is a rough screening number — for health decisions, talk to a doctor, not a calculator.";
export const COPYRIGHT_LINE = "Free calculators, hand-built by Aditya in India.";

/* ------------------------------ homepage ------------------------------ */

export interface HomeToolCard {
  href: string;
  title: string;
  blurb: string;
  icon: string; // key into the icon set
}

export const HOME = {
  eyebrow: "Made for India · free forever",
  h1a: "Money questions?",
  h1b: "Answered in seconds.",
  heroCopy:
    "Hisab (हिसाब — 'the account') is a small corner of the internet for the questions Indians actually type into Google at 11pm: what will my bike EMI be? Where could this SIP end up? Type your numbers, get an honest answer. No sign-up, no spam, no 'talk to our advisor' pop-up — your numbers never leave your browser.",
  badges: ["10 calculators", "Free forever", "No sign-up", "Private by design"],
  sticker: "no sign-up, ever",
  toolsEyebrow: "The toolbox",
  toolsHeading: "Pick one and start typing",
  tools: [
    { href: "emi-calculator.html", title: "EMI Calculator", blurb: "Bike loan? Home loan? See the real monthly number — interest included.", icon: "rupee" },
    { href: "sip-calculator.html", title: "SIP Calculator", blurb: "₹5,000 a month — where could it actually end up in 10 years?", icon: "trend" },
    { href: "fd-calculator.html", title: "FD Calculator", blurb: "That lump sum in your savings account could be working harder.", icon: "vault" },
    { href: "rd-calculator.html", title: "RD Calculator", blurb: "Small monthly deposits, grown up. The salary-earner's classic.", icon: "layers" },
    { href: "ppf-calculator.html", title: "PPF Calculator", blurb: "15 years of tax-free compounding. Patience, rewarded.", icon: "spark" },
    { href: "percentage-calculator.html", title: "Percentage Calculator", blurb: "Discounts, marks, hikes — the only three percentage problems you'll ever meet.", icon: "percent" },
    { href: "age-calculator.html", title: "Age Calculator", blurb: "Your exact age, down to the day. Plus the birthday countdown.", icon: "clock" },
    { href: "cgpa-calculator.html", title: "CGPA Calculator", blurb: "CBSE's ×9.5 rule, both directions. For forms that ask.", icon: "grade" },
    { href: "bmi-calculator.html", title: "BMI Calculator", blurb: "A quick health number, with the honest caveats attached.", icon: "gauge" },
    { href: "discount-calculator.html", title: "Discount Calculator", blurb: "Is that '70% off' sale actually a deal? Check before you pay.", icon: "tag" },
  ] as HomeToolCard[],
  whyEyebrow: "Why this exists",
  whyHeading: "I got tired of calculator sites that felt like traps",
  why: [
    "Every calculator site I used ran the same playbook: bury the answer under ads, demand my phone number, then call me about a credit card. So I built the opposite. Type your numbers, see the answer instantly, and read a short plain-English explanation of what it actually means. Where an assumption is involved — like the PPF interest rate — it's shown and editable, not hiding in fine print.",
    "And nothing you type ever leaves your device. There's no server doing the maths — your browser does it all, which also means it works on patchy train Wi-Fi.",
  ],
  authorEyebrow: "A note from the author",
  authorQuote:
    "I'm Aditya, a student developer in India. I kept doing the same five money calculations on ugly, ad-crammed calculator sites and thought — I can make this nicer. So I did, by hand, one calculator at a time. If Hisab ever saved you a phone call to your bank, tell a friend about it.",
  authorSign: "— Aditya",
  faqEyebrow: "FAQ",
  faqHeading: "Fair questions",
  faq: [
    {
      q: "Is Hisab free to use?",
      a: "Yes — all of it. No accounts, no limits, no 'pro plan' upsell. This is a side project, not a funnel.",
    },
    {
      q: "Is my data uploaded anywhere?",
      a: "Nope. Every calculation runs in your browser, on your own device. There's no server on my end that could store your numbers even if I wanted to.",
    },
    {
      q: "How accurate are the calculators?",
      a: "They use the same standard formulas banks and boards publish — good enough for planning and for arguing with salespeople. Your bank's final figure may differ by a few rupees due to rounding.",
    },
    {
      q: "Do I need to sign up?",
      a: "There's nothing to sign up for — accounts don't exist here. Open a calculator and start typing.",
    },
    {
      q: "Which calculator should I use for a home loan?",
      a: "The EMI calculator. Enter the loan amount, the rate the bank actually quoted you (not the advertised one), and the tenure. Then try a shorter tenure and watch the total interest shrink — that's the real lesson.",
    },
  ] as FaqItem[],
  disclaimer: DISCLAIMER_FINANCE,
};

export const HOME_JSONLD = [
  `{"@context":"https://schema.org","@type":"WebApplication","name":"Hisab","url":"https://hisab-58f.pages.dev/","applicationCategory":"FinanceApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"INR"},"description":"Hisab is a free set of calculators for India: EMI, SIP, FD, RD, PPF, percentage, age, CGPA, BMI and discount. No sign-up — everything is computed privately in your browser."}`,
  `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is Hisab free to use?","acceptedAnswer":{"@type":"Answer","text":"Yes — all of it. No accounts, no limits, no 'pro plan' upsell. This is a side project, not a funnel."}},{"@type":"Question","name":"Is my data uploaded anywhere?","acceptedAnswer":{"@type":"Answer","text":"Nope. Every calculation runs in your browser, on your own device. There's no server on my end that could store your numbers even if I wanted to."}},{"@type":"Question","name":"How accurate are the calculators?","acceptedAnswer":{"@type":"Answer","text":"They use the same standard formulas banks and boards publish — good enough for planning and for arguing with salespeople. Your bank's final figure may differ by a few rupees due to rounding."}},{"@type":"Question","name":"Do I need to sign up?","acceptedAnswer":{"@type":"Answer","text":"There's nothing to sign up for — accounts don't exist here. Open a calculator and start typing."}},{"@type":"Question","name":"Which calculator should I use for a home loan?","acceptedAnswer":{"@type":"Answer","text":"The EMI calculator. Enter the loan amount, the rate the bank actually quoted you (not the advertised one), and the tenure. Then try a shorter tenure and watch the total interest shrink — that's the real lesson."}}]}`,
];

/* EMI */
export const EMI: PageContent = {
  slug: "emi",
  jsonLd: [
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is EMI?","acceptedAnswer":{"@type":"Answer","text":"The fixed amount you pay your lender every month until the loan is cleared. Every EMI is two things glued together: interest on what you still owe, plus a bite of the principal."}},{"@type":"Question","name":"Does a longer tenure always mean a lower EMI?","acceptedAnswer":{"@type":"Answer","text":"Yes — but it's a trade, not a free lunch. Longer tenure means a smaller EMI and a much bigger total interest bill. On a 20-year home loan, the interest can nearly equal the principal. Shorter tenure hurts every month but wins overall."}},{"@type":"Question","name":"Is the EMI the same every month?","acceptedAnswer":{"@type":"Answer","text":"With a fixed rate, yes. With a floating rate, the bank either bumps your EMI or quietly stretches your tenure when rates move — ask which one they do before you sign."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "EMI Calculator",
  lead: "Your monthly EMI, total interest and total payable — updated live as you type. Try the rate your bank actually quoted you, not the advertised one.",
  sticker: "your numbers never leave this tab",
  workspaces: [
    {
      calcName: "emi",
      formLabel: "EMI inputs",
      fieldRows: [
        [{ id: "emi-p", label: "Loan amount (₹)", field: "principal", type: "number", value: "150000", min: "0", step: "1000", inputmode: "decimal", hint: "Buying a bike? ₹1,50,000 is filled in — change it to your number." }],
        [{ id: "emi-r", label: "Interest rate (% per year)", field: "rate", type: "number", value: "12", min: "0", max: "40", step: "0.05", inputmode: "decimal", hint: "Use the rate on your sanction letter, not the billboard." }],
        [{ id: "emi-n", label: "Tenure (months)", field: "months", type: "number", value: "36", min: "1", max: "360", step: "1", inputmode: "numeric", hint: "36 months = 3 years · 60 = 5 · 120 = 10 · 240 = 20." }],
      ],
      heroLabel: "You'd pay every month",
      heroParts: [{ key: "emi" }],
      rows: [
        { label: "Interest the bank earns", key: "interest" },
        { label: "Total out of your pocket", key: "total" },
      ],
      note: "Reducing-balance, monthly rests — the same maths Indian lenders use. Honest aside: dealers quote the lowest rate with the longest tenure to make the EMI look small. This shows the full picture.",
    },
  ],
  steps: [
    { t: "Type your real numbers", d: "Loan amount, the rate on your sanction letter, and the tenure in months." },
    { t: "Read the full picture", d: "Monthly EMI up top — total interest and total payable below it." },
    { t: "Shorten the tenure", d: "Watch the interest column shrink. That's the real cost of a 'low EMI'." },
  ],
  explainHeading: "How EMI actually works",
  explain: [
    "EMI — Equated Monthly Instalment — is one fixed payment every month till the loan is done. Each payment is part interest (on what you still owe) and part principal. In the early years you're mostly paying interest. The bank gets paid before you do.",
    "This uses the reducing-balance method with monthly rests, which is what Indian banks actually use for home, car and personal loans. On a floating rate, treat the result as today's snapshot — it moves when the repo rate moves.",
  ],
  faqHeading: "EMI questions, answered honestly",
  faq: [
    { q: "What is EMI?", a: "The fixed amount you pay your lender every month until the loan is cleared. Every EMI is two things glued together: interest on what you still owe, plus a bite of the principal." },
    { q: "Does a longer tenure always mean a lower EMI?", a: "Yes — but it's a trade, not a free lunch. Longer tenure means a smaller EMI and a much bigger total interest bill. On a 20-year home loan, the interest can nearly equal the principal. Shorter tenure hurts every month but wins overall." },
    { q: "Is the EMI the same every month?", a: "With a fixed rate, yes. With a floating rate, the bank either bumps your EMI or quietly stretches your tenure when rates move — ask which one they do before you sign." },
  ],
  related: [
    { href: "sip-calculator.html", label: "SIP Calculator" },
    { href: "fd-calculator.html", label: "FD Calculator" },
    { href: "ppf-calculator.html", label: "PPF Calculator" },
    { href: "percentage-calculator.html", label: "Percentage Calculator" },
  ],
  disclaimer: DISCLAIMER_FINANCE,
};

/* SIP */
export const SIP: PageContent = {
  slug: "sip",
  jsonLd: [
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a good expected return to assume for SIP?","acceptedAnswer":{"@type":"Answer","text":"Planners love illustrating with 10–12% a year for long-term equity SIPs. Reality check: nobody knows. Run your numbers at 10% and 8% too — if the plan still works at 8%, it's actually a plan."}},{"@type":"Question","name":"Is SIP better than a lump sum investment?","acceptedAnswer":{"@type":"Answer","text":"SIP fits salaries: small, regular, no timing stress. A lump sum wins if you invest right before a bull run — and stings if you don't. Since nobody rings a bell at market bottoms, the SIP is the sane default for most of us."}},{"@type":"Question","name":"Are SIP returns guaranteed?","acceptedAnswer":{"@type":"Answer","text":"No. Your money rides the market, and the market doesn't do guarantees. Anyone promising 'assured 15% returns' is selling you something."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "SIP Calculator",
  lead: "What could your monthly SIP grow into? Enter an amount, pick a return you actually believe, and watch compounding do its slow magic.",
  sticker: "optimism is not a strategy",
  workspaces: [
    {
      calcName: "sip",
      formLabel: "SIP inputs",
      fieldRows: [
        [{ id: "sip-m", label: "Monthly investment (₹)", field: "monthly", type: "number", value: "5000", min: "0", step: "500", inputmode: "decimal", hint: "₹5,000/month is filled in — roughly one dinner out with friends." }],
        [{ id: "sip-r", label: "Expected return (% per year)", field: "rate", type: "number", value: "12", min: "0", max: "30", step: "0.5", inputmode: "decimal", hint: "12% is the classic illustration. Also try 10% — optimism isn't a strategy." }],
        [{ id: "sip-y", label: "Time period (years)", field: "years", type: "number", value: "10", min: "1", max: "40", step: "1", inputmode: "numeric" }],
      ],
      heroLabel: "Could grow to",
      heroParts: [{ key: "maturity" }],
      rows: [
        { label: "You'd put in", key: "invested" },
        { label: "Growth (if markets play along)", key: "gains" },
      ],
      note: "Monthly compounding, invested at each month's start. This is a projection, not a promise — mutual funds are subject to market risks. Read that line again.",
    },
  ],
  steps: [
    { t: "Enter your monthly amount", d: "₹5,000 is filled in — roughly one dinner out with friends." },
    { t: "Pick a return you believe", d: "12% is the classic illustration. Also try 10%." },
    { t: "Read it as a sketch", d: "A projection, not a promise — markets don't do guarantees." },
  ],
  explainHeading: "How SIP growth actually works",
  explain: [
    "A SIP puts a fixed sum into a mutual fund every month. When markets dip, your ₹5,000 buys more units; when they rise, fewer. That averaging — rupee cost averaging, if you want the textbook term — is the whole point.",
    "The real engine is compounding: after a few years, your past growth starts earning more than your fresh deposits. Starting early beats starting big, and the last three years of a ten-year SIP do most of the work.",
  ],
  faqHeading: "SIP questions, answered honestly",
  faq: [
    { q: "What is a good expected return to assume for SIP?", a: "Planners love illustrating with 10–12% a year for long-term equity SIPs. Reality check: nobody knows. Run your numbers at 10% and 8% too — if the plan still works at 8%, it's actually a plan." },
    { q: "Is SIP better than a lump sum investment?", a: "SIP fits salaries: small, regular, no timing stress. A lump sum wins if you invest right before a bull run — and stings if you don't. Since nobody rings a bell at market bottoms, the SIP is the sane default for most of us." },
    { q: "Are SIP returns guaranteed?", a: "No. Your money rides the market, and the market doesn't do guarantees. Anyone promising 'assured 15% returns' is selling you something." },
  ],
  related: [
    { href: "emi-calculator.html", label: "EMI Calculator" },
    { href: "fd-calculator.html", label: "FD Calculator" },
    { href: "rd-calculator.html", label: "RD Calculator" },
    { href: "ppf-calculator.html", label: "PPF Calculator" },
  ],
  disclaimer: DISCLAIMER_FINANCE_MF,
};

/* FD */
export const FD: PageContent = {
  slug: "fd",
  jsonLd: [
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is compounding frequency in FD?","acceptedAnswer":{"@type":"Answer","text":"How often the bank adds interest to your balance — monthly, quarterly, half-yearly or yearly. More frequent compounding earns a little more at the same rate. Most Indian FDs compound quarterly."}},{"@type":"Question","name":"Is FD interest taxable?","acceptedAnswer":{"@type":"Answer","text":"Yes — it joins your income and gets taxed at your slab. Banks also cut TDS if your interest crosses the threshold in a financial year. The 'maturity value' here is before all that."}},{"@type":"Question","name":"Can I break an FD before maturity?","acceptedAnswer":{"@type":"Answer","text":"Usually yes, but there's a penalty (often around 1%) and you earn interest at a lower rate for the time completed. Breaking an FD should hurt a little — that's the design."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "FD Calculator",
  lead: "Your fixed deposit's maturity value — with the compounding frequency your bank actually uses. Spoiler: it's quarterly.",
  workspaces: [
    {
      calcName: "fd",
      formLabel: "FD inputs",
      fieldRows: [
        [{ id: "fd-p", label: "Deposit amount (₹)", field: "principal", type: "number", value: "100000", min: "0", step: "1000", inputmode: "decimal" }],
        [{ id: "fd-r", label: "Interest rate (% per year)", field: "rate", type: "number", value: "7", min: "0", max: "20", step: "0.05", inputmode: "decimal", hint: "Check your bank's latest FD rates — they move more often than you'd think." }],
        [
          { id: "fd-t", label: "Tenure (years)", field: "years", type: "number", value: "5", min: "0.25", max: "10", step: "0.25", inputmode: "decimal" },
          {
            id: "fd-f", label: "Compounding", field: "freq", type: "select", value: "4",
            options: [
              { value: "12", label: "Monthly" },
              { value: "4", label: "Quarterly", selected: true },
              { value: "2", label: "Half-yearly" },
              { value: "1", label: "Yearly" },
            ],
          },
        ],
      ],
      heroLabel: "You'd get back",
      heroParts: [{ key: "maturity" }],
      rows: [
        { label: "You'd lock in", key: "invested" },
        { label: "Interest earned (before tax)", key: "interest" },
      ],
      note: "Standard compound-interest formula. Before tax and TDS — the taxman cometh.",
    },
  ],
  steps: [
    { t: "Enter deposit and rate", d: "The rate your bank's FD page shows for your tenure." },
    { t: "Pick compounding", d: "Quarterly is the usual default at Indian banks." },
    { t: "See maturity and interest", d: "Before tax — the taxman cometh separately." },
  ],
  explainHeading: "How FD growth actually works",
  explain: [
    "Compound interest means each period's interest gets added to your balance, so the next period earns on a bigger sum. Most Indian bank FDs compound quarterly — that's the default here.",
    "Honest aside: the difference between quarterly and yearly compounding on ₹1 lakh is a few hundred rupees, not lakhs. Banks love advertising the rate; the compounding frequency is the quiet footnote. Now you know both.",
  ],
  faqHeading: "FD questions, answered honestly",
  faq: [
    { q: "What is compounding frequency in FD?", a: "How often the bank adds interest to your balance — monthly, quarterly, half-yearly or yearly. More frequent compounding earns a little more at the same rate. Most Indian FDs compound quarterly." },
    { q: "Is FD interest taxable?", a: "Yes — it joins your income and gets taxed at your slab. Banks also cut TDS if your interest crosses the threshold in a financial year. The 'maturity value' here is before all that." },
    { q: "Can I break an FD before maturity?", a: "Usually yes, but there's a penalty (often around 1%) and you earn interest at a lower rate for the time completed. Breaking an FD should hurt a little — that's the design." },
  ],
  related: [
    { href: "rd-calculator.html", label: "RD Calculator" },
    { href: "ppf-calculator.html", label: "PPF Calculator" },
    { href: "sip-calculator.html", label: "SIP Calculator" },
    { href: "emi-calculator.html", label: "EMI Calculator" },
  ],
  disclaimer: DISCLAIMER_FINANCE,
};

/* RD */
export const RD: PageContent = {
  slug: "rd",
  jsonLd: [
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"RD vs FD — which is better?","acceptedAnswer":{"@type":"Answer","text":"Got the lump sum already? FD — the whole amount works from day one. Building from salary? RD. Its superpower isn't the rate, it's that the money leaves your account before you can spend it."}},{"@type":"Question","name":"What happens if I miss an RD instalment?","acceptedAnswer":{"@type":"Answer","text":"A small penalty per miss (often around ₹10 per ₹100 of instalment). Miss repeatedly and the bank may close the RD and pay savings-account interest instead — the polite version of 'we're done here'."}},{"@type":"Question","name":"Is RD interest taxable?","acceptedAnswer":{"@type":"Answer","text":"Yes, at your slab, with TDS above the threshold. The taxman doesn't skip RDs."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "RD Calculator",
  lead: "Turn a monthly habit into a lump sum. RDs are how salaried India has saved for decades — unglamorous, reliable.",
  workspaces: [
    {
      calcName: "rd",
      formLabel: "RD inputs",
      fieldRows: [
        [{ id: "rd-m", label: "Monthly deposit (₹)", field: "monthly", type: "number", value: "5000", min: "0", step: "500", inputmode: "decimal", hint: "Start with an amount you won't miss." }],
        [{ id: "rd-r", label: "Interest rate (% per year)", field: "rate", type: "number", value: "7", min: "0", max: "20", step: "0.05", inputmode: "decimal" }],
        [{ id: "rd-y", label: "Tenure (years)", field: "years", type: "number", value: "5", min: "0.5", max: "10", step: "0.5", inputmode: "decimal" }],
      ],
      heroLabel: "Your habit could grow to",
      heroParts: [{ key: "maturity" }],
      rows: [
        { label: "You'd deposit", key: "invested" },
        { label: "Interest earned", key: "interest" },
      ],
      note: "Quarterly compounding via effective monthly rate — close to what banks compute. Before tax.",
    },
  ],
  steps: [
    { t: "Enter your monthly deposit", d: "Whatever you can put away without thinking about it." },
    { t: "Set the rate and years", d: "RD rates usually trail FD rates by a hair." },
    { t: "Check the maturity", d: "A small monthly habit, one lump sum at the end." },
  ],
  explainHeading: "How RD growth actually works",
  explain: [
    "An RD is forced savings with interest: the same amount every month, compounded quarterly by the bank. Deposits made earlier earn for longer, so even starting six months sooner makes a visible difference.",
    "At the same rate, an FD of the full amount beats an RD — the whole sum works from day one. The RD's superpower isn't returns; it's that it actually happens. The money leaves before you can spend it.",
  ],
  faqHeading: "RD questions, answered honestly",
  faq: [
    { q: "RD vs FD — which is better?", a: "Got the lump sum already? FD — the whole amount works from day one. Building from salary? RD. Its superpower isn't the rate, it's that the money leaves your account before you can spend it." },
    { q: "What happens if I miss an RD instalment?", a: "A small penalty per miss (often around ₹10 per ₹100 of instalment). Miss repeatedly and the bank may close the RD and pay savings-account interest instead — the polite version of 'we're done here'." },
    { q: "Is RD interest taxable?", a: "Yes, at your slab, with TDS above the threshold. The taxman doesn't skip RDs." },
  ],
  related: [
    { href: "fd-calculator.html", label: "FD Calculator" },
    { href: "sip-calculator.html", label: "SIP Calculator" },
    { href: "ppf-calculator.html", label: "PPF Calculator" },
    { href: "emi-calculator.html", label: "EMI Calculator" },
  ],
  disclaimer: DISCLAIMER_FINANCE,
};

/* PPF */
export const PPF: PageContent = {
  slug: "ppf",
  jsonLd: [
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the current PPF interest rate?","acceptedAnswer":{"@type":"Answer","text":"The government revises it every quarter — it's been 7.1% for a long stretch, but don't take my word for it. That's exactly why the rate field here is editable: set it to whatever's current."}},{"@type":"Question","name":"Can I extend PPF after 15 years?","acceptedAnswer":{"@type":"Answer","text":"Yes — in 5-year blocks, with or without fresh deposits. Plenty of people keep it running as a tax-free corner of their portfolio."}},{"@type":"Question","name":"Is PPF tax-free?","acceptedAnswer":{"@type":"Answer","text":"Yes — the famous EEE: deduction on deposit under 80C, zero tax on interest, zero tax on maturity. One of the few places in Indian finance where all three boxes tick."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "PPF Calculator",
  lead: "15 years of tax-free compounding. PPF rewards the patient — project yours, then try not to check it every month.",
  workspaces: [
    {
      calcName: "ppf",
      formLabel: "PPF inputs",
      fieldRows: [
        [{ id: "ppf-a", label: "Yearly deposit (₹)", field: "yearly", type: "number", value: "150000", min: "500", max: "150000", step: "5000", inputmode: "decimal", hint: "Max ₹1,50,000 a year. Deposit before April 5th to earn for the full year." }],
        [{ id: "ppf-r", label: "Assumed interest rate (% per year)", field: "rate", type: "number", value: "7.1", min: "0", max: "15", step: "0.1", inputmode: "decimal", hint: "Government-revised every quarter. Edit this to match today's rate." }],
      ],
      heroLabel: "In 15 years, roughly",
      heroParts: [{ key: "maturity" }],
      rows: [
        { label: "You'd deposit", key: "invested" },
        { label: "Interest (tax-free)", key: "interest" },
      ],
      note: "Deposits assumed at each year's start; rate held constant for 15 years. The government revises the rate quarterly, so treat this as a sketch, not a contract.",
    },
  ],
  steps: [
    { t: "Enter your yearly deposit", d: "Up to ₹1.5 lakh a year gets the tax benefits." },
    { t: "Check the rate assumption", d: "It's editable — the government revises it, so should you." },
    { t: "See 15 years out", d: "Tax-free maturity, compounded yearly. Patience, rewarded." },
  ],
  explainHeading: "How PPF growth actually works",
  explain: [
    "PPF runs 15 years: deposit ₹500 to ₹1,50,000 a year, interest compounds yearly. The one hack worth knowing — deposits made before April 5th earn interest for the full financial year.",
    "The real magic is EEE tax status: 80C deduction on the way in, zero tax on interest, zero tax on maturity. Few instruments in India do all three. The rate itself is government-set and revised quarterly — which is why you can edit it here instead of trusting a hardcoded number.",
  ],
  faqHeading: "PPF questions, answered honestly",
  faq: [
    { q: "What is the current PPF interest rate?", a: "The government revises it every quarter — it's been 7.1% for a long stretch, but don't take my word for it. That's exactly why the rate field here is editable: set it to whatever's current." },
    { q: "Can I extend PPF after 15 years?", a: "Yes — in 5-year blocks, with or without fresh deposits. Plenty of people keep it running as a tax-free corner of their portfolio." },
    { q: "Is PPF tax-free?", a: "Yes — the famous EEE: deduction on deposit under 80C, zero tax on interest, zero tax on maturity. One of the few places in Indian finance where all three boxes tick." },
  ],
  related: [
    { href: "sip-calculator.html", label: "SIP Calculator" },
    { href: "fd-calculator.html", label: "FD Calculator" },
    { href: "rd-calculator.html", label: "RD Calculator" },
    { href: "emi-calculator.html", label: "EMI Calculator" },
  ],
  disclaimer: DISCLAIMER_FINANCE,
};

/* Percentage — three independent workspaces */
export const PERCENTAGE: PageContent = {
  slug: "percentage",
  jsonLd: [
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I find X percent of Y?","acceptedAnswer":{"@type":"Answer","text":"Multiply X by Y, divide by 100. 15% of 200 = (15 × 200) ÷ 100 = 30. That's the whole trick."}},{"@type":"Question","name":"How do I find what percent X is of Y?","acceptedAnswer":{"@type":"Answer","text":"Divide X by Y, multiply by 100. 30 is (30 ÷ 200) × 100 = 15% of 200."}},{"@type":"Question","name":"What is the difference between percent and percentage points?","acceptedAnswer":{"@type":"Answer","text":"10% to 15% is a 5-percentage-point rise but a 50% relative jump. Salespeople and politicians mix these up on purpose. You won't, anymore."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "Percentage Calculator",
  lead: "The only three percentage problems you'll ever meet — discounts, scores, hikes. Solved as you type.",
  workspaces: [
    {
      calcName: "pct1",
      formLabel: "What is X percent of Y",
      formHeading: "What is X% of Y?",
      fieldRows: [
        [
          { id: "p1-x", label: "X (%)", field: "x", type: "number", value: "15", step: "any", inputmode: "decimal" },
          { id: "p1-y", label: "Y", field: "y", type: "number", value: "200", step: "any", inputmode: "decimal" },
        ],
      ],
      heroLabel: "Answer",
      heroParts: [{ key: "answer" }],
      rows: [],
    },
    {
      calcName: "pct2",
      formLabel: "X is what percent of Y",
      formHeading: "X is what % of Y?",
      fieldRows: [
        [
          { id: "p2-x", label: "X", field: "x", type: "number", value: "30", step: "any", inputmode: "decimal" },
          { id: "p2-y", label: "Y", field: "y", type: "number", value: "200", step: "any", inputmode: "decimal" },
        ],
      ],
      heroLabel: "Answer",
      heroParts: [{ key: "answer" }],
      rows: [],
    },
    {
      calcName: "pct3",
      formLabel: "Percentage change from A to B",
      formHeading: "Percentage change from A to B",
      fieldRows: [
        [
          { id: "p3-a", label: "From (A)", field: "a", type: "number", value: "200", step: "any", inputmode: "decimal" },
          { id: "p3-b", label: "To (B)", field: "b", type: "number", value: "250", step: "any", inputmode: "decimal" },
        ],
      ],
      heroLabel: "Change",
      heroParts: [{ key: "answer" }],
      rows: [],
      note: "Positive = increase, negative = decrease. Prices do fall sometimes.",
    },
  ],
  steps: [
    { t: "Pick what you're solving", d: "X% of Y, what-percent, or percent change." },
    { t: "Type the two numbers", d: "It solves live — no button to press." },
    { t: "Read the answer", d: "With the working shown, so you can trust it." },
  ],
  explainHeading: "Percentages without the headache",
  explain: [
    "'X% of Y' is discounts and marks. 'X is what % of Y' is scores and shares. 'Change from A to B' is salaries and prices. That's the entire subject — everything else is arithmetic.",
    "The classic trap: 10% to 15% is 5 percentage points but a 50% relative rise. Politicians and salespeople mix these up on purpose. You won't, anymore.",
  ],
  faqHeading: "Percentage questions, answered honestly",
  faq: [
    { q: "How do I find X percent of Y?", a: "Multiply X by Y, divide by 100. 15% of 200 = (15 × 200) ÷ 100 = 30. That's the whole trick." },
    { q: "How do I find what percent X is of Y?", a: "Divide X by Y, multiply by 100. 30 is (30 ÷ 200) × 100 = 15% of 200." },
    { q: "What is the difference between percent and percentage points?", a: "10% to 15% is a 5-percentage-point rise but a 50% relative jump. Salespeople and politicians mix these up on purpose. You won't, anymore." },
  ],
  related: [
    { href: "discount-calculator.html", label: "Discount Calculator" },
    { href: "emi-calculator.html", label: "EMI Calculator" },
    { href: "cgpa-calculator.html", label: "CGPA Calculator" },
    { href: "bmi-calculator.html", label: "BMI Calculator" },
  ],
  disclaimer: DISCLAIMER_FINANCE,
};

/* Age */
export const AGE: PageContent = {
  slug: "age",
  jsonLd: [
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How is age in months and days calculated?","acceptedAnswer":{"@type":"Answer","text":"Full years first, then full months, then leftover days — using each month's real length and real leap years. Feb 29 babies included."}},{"@type":"Question","name":"Why does my age differ across calculators?","acceptedAnswer":{"@type":"Answer","text":"The lazy ones divide total days by 365.25 and call it a day. This one walks the calendar properly, which is why it can differ by a day from sloppier sites."}},{"@type":"Question","name":"Does the age calculator work for future dates?","acceptedAnswer":{"@type":"Answer","text":"No — and it won't let you try. The latest date you can pick is today."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "Age Calculator",
  lead: "Your exact age — years, months, days — done the calendar-correct way. Plus a countdown to cake day.",
  workspaces: [
    {
      calcName: "age",
      formLabel: "Age inputs",
      fieldRows: [
        [{ id: "age-b", label: "Date of birth", field: "birthdate", type: "date", value: "1999-08-15", dynamicMaxToday: true, hint: "Time travel not supported — the latest you can pick is today." }],
      ],
      heroLabel: "Your age",
      heroParts: [
        { key: "years", suffix: " yrs " },
        { key: "months", suffix: " mo " },
        { key: "days", suffix: " days" },
      ],
      rows: [
        { label: "Your next birthday is in", key: "next" },
        { label: "Days you've been alive", key: "lived" },
      ],
      note: "Calendar-correct: real month lengths, real leap years. Feb 29 babies — we see you.",
    },
  ],
  steps: [
    { t: "Enter the birthdate", d: "Yours, theirs — the calculator doesn't judge." },
    { t: "See the exact age", d: "Years, months and days, worked out properly." },
    { t: "Check the countdown", d: "Days to the next birthday, for the planners." },
  ],
  explainHeading: "How exact age is worked out",
  explain: [
    "Age looks simple until leap years and short Februaries crash the party. The correct way: count full years, then full months, then leftover days — using each month's real length.",
    "That's why two sites can disagree by a day: the lazy ones divide total days by 365.25. This one walks the calendar properly, the way your grandmother would count.",
  ],
  faqHeading: "Age questions, answered honestly",
  faq: [
    { q: "How is age in months and days calculated?", a: "Full years first, then full months, then leftover days — using each month's real length and real leap years. Feb 29 babies included." },
    { q: "Why does my age differ across calculators?", a: "The lazy ones divide total days by 365.25 and call it a day. This one walks the calendar properly, which is why it can differ by a day from sloppier sites." },
    { q: "Does the age calculator work for future dates?", a: "No — and it won't let you try. The latest date you can pick is today." },
  ],
  related: [
    { href: "percentage-calculator.html", label: "Percentage Calculator" },
    { href: "cgpa-calculator.html", label: "CGPA Calculator" },
    { href: "bmi-calculator.html", label: "BMI Calculator" },
    { href: "discount-calculator.html", label: "Discount Calculator" },
  ],
  disclaimer: DISCLAIMER_FINANCE,
};

/* CGPA — two independent workspaces */
export const CGPA: PageContent = {
  slug: "cgpa",
  jsonLd: [
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do you convert CGPA to percentage?","acceptedAnswer":{"@type":"Answer","text":"CBSE's rule: percentage = CGPA × 9.5. So 8.6 becomes 81.7%. It's a board convention, not physics — but it's the one that matters for your forms."}},{"@type":"Question","name":"Is the 9.5 multiplier used by all boards?","acceptedAnswer":{"@type":"Answer","text":"No — ×9.5 is CBSE's. Other boards publish their own formulas, and some just want the CGPA. For anything official, use your institution's rule; use this for quick conversions and settling family debates."}},{"@type":"Question","name":"How do I convert percentage back to CGPA?","acceptedAnswer":{"@type":"Answer","text":"Divide by 9.5. 81.7% ÷ 9.5 = 8.6 CGPA. Both directions, same box."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "CGPA Calculator",
  lead: "CGPA ↔ percentage, both directions, using CBSE's ×9.5 rule. For every form that asks — and every relative who converts it wrong.",
  workspaces: [
    {
      calcName: "cgpa1",
      formLabel: "CGPA to percentage",
      formHeading: "CGPA → Percentage",
      fieldRows: [
        [{ id: "cgpa-v", label: "Your CGPA (out of 10)", field: "cgpa", type: "number", value: "8.6", min: "0", max: "10", step: "0.1", inputmode: "decimal" }],
      ],
      heroLabel: "Percentage",
      heroParts: [{ key: "answer" }],
      rows: [],
    },
    {
      calcName: "cgpa2",
      formLabel: "Percentage to CGPA",
      formHeading: "Percentage → CGPA",
      fieldRows: [
        [{ id: "pct-v", label: "Your percentage", field: "pct", type: "number", value: "81.7", min: "0", max: "100", step: "0.1", inputmode: "decimal" }],
      ],
      heroLabel: "CGPA",
      heroParts: [{ key: "answer" }],
      rows: [],
    },
  ],
  steps: [
    { t: "Enter your CGPA", d: "The number on your marksheet." },
    { t: "See the percentage", d: "Converted with the ×9.5 rule most Indian boards use." },
    { t: "Reverse it if needed", d: "For forms that ask for CGPA when you only remember percentage." },
  ],
  explainHeading: "The ×9.5 rule, honestly explained",
  explain: [
    "CBSE's official conversion: percentage = CGPA × 9.5. So 8.6 becomes 81.7%. It's printed on the back of your marksheet — a board-level convention, not a law of mathematics.",
    "Other boards and universities publish their own formulas, and some ask for CGPA directly. For job forms and admissions, follow your institution's rule. This calculator is for quick conversions and settling family debates.",
  ],
  faqHeading: "CGPA questions, answered honestly",
  faq: [
    { q: "How do you convert CGPA to percentage?", a: "CBSE's rule: percentage = CGPA × 9.5. So 8.6 becomes 81.7%. It's a board convention, not physics — but it's the one that matters for your forms." },
    { q: "Is the 9.5 multiplier used by all boards?", a: "No — ×9.5 is CBSE's. Other boards publish their own formulas, and some just want the CGPA. For anything official, use your institution's rule; use this for quick conversions and settling family debates." },
    { q: "How do I convert percentage back to CGPA?", a: "Divide by 9.5. 81.7% ÷ 9.5 = 8.6 CGPA. Both directions, same box." },
  ],
  related: [
    { href: "percentage-calculator.html", label: "Percentage Calculator" },
    { href: "age-calculator.html", label: "Age Calculator" },
    { href: "bmi-calculator.html", label: "BMI Calculator" },
    { href: "discount-calculator.html", label: "Discount Calculator" },
  ],
  disclaimer: DISCLAIMER_FINANCE,
};

/* BMI */
export const BMI: PageContent = {
  slug: "bmi",
  jsonLd: [
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a healthy BMI?","acceptedAnswer":{"@type":"Answer","text":"WHO says 18.5–24.9 is the normal range for adults. Under 18.5 is underweight, 25–29.9 overweight, 30+ obese. Ranges, not grades."}},{"@type":"Question","name":"Is BMI accurate for athletes?","acceptedAnswer":{"@type":"Answer","text":"Not always — it can't tell muscle from fat, so regular lifters often land in 'overweight' while being fitter than most. It's a screening nudge, not a diagnosis."}},{"@type":"Question","name":"Are the cutoffs different for Indians?","acceptedAnswer":{"@type":"Answer","text":"Some Indian guidelines suggest lower action cutoffs — around 23 for overweight, 27.5 for obese — because metabolic risk shows up earlier in South Asians. This calculator shows WHO bands and flags the difference."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "BMI Calculator",
  lead: "Your body mass index with the standard WHO bands — and the honest caveats most calculators skip.",
  workspaces: [
    {
      calcName: "bmi",
      formLabel: "BMI inputs",
      fieldRows: [
        [
          { id: "bmi-h", label: "Height (cm)", field: "height", type: "number", value: "170", min: "50", max: "250", step: "0.5", inputmode: "decimal" },
          { id: "bmi-w", label: "Weight (kg)", field: "weight", type: "number", value: "70", min: "10", max: "400", step: "0.5", inputmode: "decimal" },
        ],
      ],
      heroLabel: "Your BMI",
      heroParts: [{ key: "bmi" }],
      rows: [{ label: "Category (WHO)", key: "category" }],
      note: "WHO bands shown. Heads-up: some Indian guidelines use lower cutoffs (23 / 27.5) — metabolic risk shows up earlier in South Asians.",
    },
  ],
  steps: [
    { t: "Enter height and weight", d: "Metric or imperial — it handles both." },
    { t: "See your BMI", d: "One number, with the WHO band it falls in." },
    { t: "Read it loosely", d: "BMI is a screening number, not a diagnosis." },
  ],
  explainHeading: "What BMI tells you — and what it doesn't",
  explain: [
    "BMI is weight in kilograms divided by height in metres squared. A 200-year-old screening formula: quick, cheap, and rough around the edges.",
    "Its blind spot is composition — it can't distinguish muscle from fat. Regular gym-goers land in 'overweight' while being fitter than most. Treat it as a nudge to think, not a verdict on your body.",
  ],
  faqHeading: "BMI questions, answered honestly",
  faq: [
    { q: "What is a healthy BMI?", a: "WHO says 18.5–24.9 is the normal range for adults. Under 18.5 is underweight, 25–29.9 overweight, 30+ obese. Ranges, not grades." },
    { q: "Is BMI accurate for athletes?", a: "Not always — it can't tell muscle from fat, so regular lifters often land in 'overweight' while being fitter than most. It's a screening nudge, not a diagnosis." },
    { q: "Are the cutoffs different for Indians?", a: "Some Indian guidelines suggest lower action cutoffs — around 23 for overweight, 27.5 for obese — because metabolic risk shows up earlier in South Asians. This calculator shows WHO bands and flags the difference." },
  ],
  related: [
    { href: "age-calculator.html", label: "Age Calculator" },
    { href: "percentage-calculator.html", label: "Percentage Calculator" },
    { href: "cgpa-calculator.html", label: "CGPA Calculator" },
    { href: "discount-calculator.html", label: "Discount Calculator" },
  ],
  disclaimer: DISCLAIMER_MEDICAL,
};

/* Discount */
export const DISCOUNT: PageContent = {
  slug: "discount",
  jsonLd: [
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do you calculate a discount?","acceptedAnswer":{"@type":"Answer","text":"Price × discount ÷ 100, then subtract. 20% off ₹1,000 = ₹1,000 − ₹200 = ₹800. One line of maths the sale banners hope you skip."}},{"@type":"Question","name":"How do stacked discounts work, like 20% + 10%?","acceptedAnswer":{"@type":"Answer","text":"One after another, not added. 20% off ₹1,000 is ₹800; 10% off ₹800 is ₹720. That's 28% off total, not 30%. Retailers know this. Now you do too."}},{"@type":"Question","name":"Does the discount apply before or after tax?","acceptedAnswer":{"@type":"Answer","text":"Usually the discount applies to the pre-tax price in India, with GST on the discounted amount — but the bill is the final word. Check it."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "Discount Calculator",
  lead: "The real price after the discount — and exactly what stays in your pocket. Check before the sale timer runs out.",
  workspaces: [
    {
      calcName: "discount",
      formLabel: "Discount inputs",
      fieldRows: [
        [
          { id: "d-p", label: "Original price (₹)", field: "price", type: "number", value: "2999", min: "0", step: "any", inputmode: "decimal", hint: "That ₹2,999 'steal deal'? Let's verify." },
          { id: "d-d", label: "Discount (%)", field: "percent", type: "number", value: "40", min: "0", max: "100", step: "any", inputmode: "decimal" },
        ],
      ],
      heroLabel: "You pay",
      heroParts: [{ key: "final" }],
      rows: [{ label: "You save", key: "save" }],
      note: "Before GST and coupon codes. The bill is the final word.",
    },
  ],
  steps: [
    { t: "Enter the price", d: "The MRP on the tag, before any 'offer'." },
    { t: "Add the discount percent", d: "Stack a second one if the store allows it." },
    { t: "See what you actually pay", d: "Final price and total saved, side by side." },
  ],
  explainHeading: "Reading discount tags honestly",
  explain: [
    "'20% off' is easy: you pay 80%. The trap is stacked discounts — '20% + extra 10%' is NOT 30% off. The second cut applies to the already-cut price: ₹1,000 → ₹800 → ₹720. That's 28% off. Retailers know this; now you do too.",
    "Also check the base: discounts in India usually apply pre-GST, with tax on the discounted amount. And if the 'MRP' looks inflated, it probably is — compare with last week's price, not the strikethrough.",
  ],
  faqHeading: "Discount questions, answered honestly",
  faq: [
    { q: "How do you calculate a discount?", a: "Price × discount ÷ 100, then subtract. 20% off ₹1,000 = ₹1,000 − ₹200 = ₹800. One line of maths the sale banners hope you skip." },
    { q: "How do stacked discounts work, like 20% + 10%?", a: "One after another, not added. 20% off ₹1,000 is ₹800; 10% off ₹800 is ₹720. That's 28% off total, not 30%. Retailers know this. Now you do too." },
    { q: "Does the discount apply before or after tax?", a: "Usually the discount applies to the pre-tax price in India, with GST on the discounted amount — but the bill is the final word. Check it." },
  ],
  related: [
    { href: "percentage-calculator.html", label: "Percentage Calculator" },
    { href: "emi-calculator.html", label: "EMI Calculator" },
    { href: "bmi-calculator.html", label: "BMI Calculator" },
    { href: "age-calculator.html", label: "Age Calculator" },
  ],
  disclaimer: DISCLAIMER_FINANCE,
};

/* Head metadata per page. Titles stay keyword-rich; descriptions got a human pass.
   Canonicals and OG URLs keep the live https://hisab-58f.pages.dev/ values. */
export interface PageHead {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const HEADS: Record<string, PageHead> = {
  index: {
    title: "Hisab — Free EMI, SIP, FD & Everyday Calculators for India",
    description: "Hisab is a free set of calculators for India: EMI, SIP, FD, RD, PPF, percentage, age, CGPA, BMI and discount. No sign-up — everything is computed privately in your browser.",
    canonical: "https://hisab-58f.pages.dev/",
    ogTitle: "Hisab — Free Calculators for India",
    ogDescription: "EMI, SIP, FD, RD, PPF, percentage, age, CGPA, BMI and discount calculators. Free, private, no sign-up.",
    ogUrl: "https://hisab-58f.pages.dev/",
    twitterTitle: "Hisab — Free Calculators for India",
    twitterDescription: "EMI, SIP, FD, RD, PPF, percentage, age, CGPA, BMI and discount calculators. Free, private, no sign-up.",
  },
  emi: {
    title: "EMI Calculator — Monthly Loan EMI Online | Hisab",
    description: "Free EMI calculator for India: loan amount, interest rate and tenure in — monthly EMI, total interest and total payable out. No sign-up, computed privately in your browser.",
    canonical: "https://hisab-58f.pages.dev/emi-calculator.html",
    ogTitle: "EMI Calculator — Monthly Loan EMI Online",
    ogDescription: "Free EMI calculator: monthly EMI, total interest and total payable for any loan. No sign-up.",
    ogUrl: "https://hisab-58f.pages.dev/emi-calculator.html",
    twitterTitle: "EMI Calculator — Monthly Loan EMI Online",
    twitterDescription: "Free EMI calculator: monthly EMI, total interest and total payable for any loan.",
  },
  sip: {
    title: "SIP Calculator — Mutual Fund SIP Returns Online | Hisab",
    description: "Free SIP calculator: monthly investment, expected return and years in — maturity value, invested amount and gains out. A projection, not a promise. No sign-up.",
    canonical: "https://hisab-58f.pages.dev/sip-calculator.html",
    ogTitle: "SIP Calculator — Mutual Fund SIP Returns Online",
    ogDescription: "Free SIP calculator: projected maturity value, invested amount and gains. No sign-up.",
    ogUrl: "https://hisab-58f.pages.dev/sip-calculator.html",
    twitterTitle: "SIP Calculator — Mutual Fund SIP Returns Online",
    twitterDescription: "Free SIP calculator: invested amount, estimated gains and maturity value.",
  },
  fd: {
    title: "FD Calculator — Fixed Deposit Maturity Value | Hisab",
    description: "Free FD calculator: deposit amount, interest rate, tenure and compounding in — maturity value and interest earned out. No sign-up, computed privately.",
    canonical: "https://hisab-58f.pages.dev/fd-calculator.html",
    ogTitle: "FD Calculator — Fixed Deposit Maturity Value",
    ogDescription: "Free FD calculator: maturity value and interest earned on your fixed deposit.",
    ogUrl: "https://hisab-58f.pages.dev/fd-calculator.html",
    twitterTitle: "FD Calculator — Fixed Deposit Maturity Value",
    twitterDescription: "Free FD calculator: maturity value and interest earned on your fixed deposit.",
  },
  rd: {
    title: "RD Calculator — Recurring Deposit Maturity Value | Hisab",
    description: "Free RD calculator: monthly deposit, interest rate and years in — maturity value and interest earned out. No sign-up, computed privately.",
    canonical: "https://hisab-58f.pages.dev/rd-calculator.html",
    ogTitle: "RD Calculator — Recurring Deposit Maturity Value",
    ogDescription: "Free RD calculator: maturity value and interest earned on monthly deposits.",
    ogUrl: "https://hisab-58f.pages.dev/rd-calculator.html",
    twitterTitle: "RD Calculator — Recurring Deposit Maturity Value",
    twitterDescription: "Free RD calculator: maturity value and interest earned on monthly deposits.",
  },
  ppf: {
    title: "PPF Calculator — PPF Maturity After 15 Years | Hisab",
    description: "Free PPF calculator: yearly deposit and assumed rate in — 15-year tax-free maturity projection out. The rate is editable. No sign-up.",
    canonical: "https://hisab-58f.pages.dev/ppf-calculator.html",
    ogTitle: "PPF Calculator — PPF Maturity After 15 Years",
    ogDescription: "Free PPF calculator: 15-year maturity on your yearly deposit, with editable rate assumption.",
    ogUrl: "https://hisab-58f.pages.dev/ppf-calculator.html",
    twitterTitle: "PPF Calculator — PPF Maturity After 15 Years",
    twitterDescription: "Free PPF calculator: 15-year maturity on your yearly deposit, with editable rate assumption.",
  },
  percentage: {
    title: "Percentage Calculator — X% of Y, Percent Change | Hisab",
    description: "Free percentage calculator: X% of Y, what-percent, and percent increase or decrease — solved instantly as you type. No sign-up.",
    canonical: "https://hisab-58f.pages.dev/percentage-calculator.html",
    ogTitle: "Percentage Calculator — X% of Y, Percent Change",
    ogDescription: "Free percentage calculator: X% of Y, what-percent, and percent increase/decrease.",
    ogUrl: "https://hisab-58f.pages.dev/percentage-calculator.html",
    twitterTitle: "Percentage Calculator — X% of Y, Percent Change",
    twitterDescription: "Free percentage calculator: X% of Y, what-percent, and percent increase/decrease.",
  },
  age: {
    title: "Age Calculator — Exact Age in Years, Months & Days | Hisab",
    description: "Free age calculator: birthdate in — exact age in years, months and days, plus a next-birthday countdown, out. No sign-up.",
    canonical: "https://hisab-58f.pages.dev/age-calculator.html",
    ogTitle: "Age Calculator — Exact Age in Years, Months & Days",
    ogDescription: "Free age calculator: exact age plus next-birthday countdown.",
    ogUrl: "https://hisab-58f.pages.dev/age-calculator.html",
    twitterTitle: "Age Calculator — Exact Age in Years, Months & Days",
    twitterDescription: "Free age calculator: exact age plus next-birthday countdown.",
  },
  cgpa: {
    title: "CGPA Calculator — Convert CGPA to Percentage | Hisab",
    description: "Free CGPA calculator: CGPA to percentage (CBSE ×9.5) and back. For forms that ask. Instant, private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/cgpa-calculator.html",
    ogTitle: "CGPA Calculator — Convert CGPA to Percentage",
    ogDescription: "Free CGPA calculator: CGPA to percentage (×9.5) and back.",
    ogUrl: "https://hisab-58f.pages.dev/cgpa-calculator.html",
    twitterTitle: "CGPA Calculator — Convert CGPA to Percentage",
    twitterDescription: "Free CGPA calculator: CGPA to percentage (×9.5) and back.",
  },
  bmi: {
    title: "BMI Calculator — Body Mass Index Online | Hisab",
    description: "Free BMI calculator: height and weight in — body mass index with WHO category bands out. Instant, private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/bmi-calculator.html",
    ogTitle: "BMI Calculator — Body Mass Index Online",
    ogDescription: "Free BMI calculator: your BMI with WHO category bands.",
    ogUrl: "https://hisab-58f.pages.dev/bmi-calculator.html",
    twitterTitle: "BMI Calculator — Body Mass Index Online",
    twitterDescription: "Free BMI calculator: your BMI with WHO category bands.",
  },
  discount: {
    title: "Discount Calculator — Final Price & Savings | Hisab",
    description: "Free discount calculator: price and discount percent in — final price and savings out. Check the sale before you pay. No sign-up.",
    canonical: "https://hisab-58f.pages.dev/discount-calculator.html",
    ogTitle: "Discount Calculator — Final Price & Savings",
    ogDescription: "Free discount calculator: final price and total savings on any discount.",
    ogUrl: "https://hisab-58f.pages.dev/discount-calculator.html",
    twitterTitle: "Discount Calculator — Final Price & Savings",
    twitterDescription: "Free discount calculator: final price and total savings on any discount.",
  },
  about: {
    title: "About Hisab — Free Calculators, Hand-Built in India",
    description: "About Hisab: a free set of money calculators for India (EMI, SIP, FD & more), hand-built by Aditya. Private by design — every number stays in your browser.",
    canonical: "https://hisab-58f.pages.dev/about.html",
    ogTitle: "About Hisab",
    ogDescription: "Free money calculators for India, hand-built by Aditya. No sign-up, no tracking.",
    ogUrl: "https://hisab-58f.pages.dev/about.html",
    twitterTitle: "About Hisab",
    twitterDescription: "Free money calculators for India, hand-built by Aditya.",
  },
  privacy: {
    title: "Privacy Policy — Hisab",
    description: "Hisab privacy: no accounts, no cookies, no analytics. Every calculation runs in your browser — your numbers never leave your device.",
    canonical: "https://hisab-58f.pages.dev/privacy.html",
    ogTitle: "Privacy Policy — Hisab",
    ogDescription: "Hisab collects nothing: no accounts, no cookies, no analytics.",
    ogUrl: "https://hisab-58f.pages.dev/privacy.html",
    twitterTitle: "Privacy Policy — Hisab",
    twitterDescription: "Hisab collects nothing: no accounts, no cookies, no analytics.",
  },
  terms: {
    title: "Terms of Use — Hisab",
    description: "Hisab terms of use: a planning tool, not financial advice. Figures are estimates from standard formulas.",
    canonical: "https://hisab-58f.pages.dev/terms.html",
    ogTitle: "Terms of Use — Hisab",
    ogDescription: "Hisab terms: planning tool, not financial advice.",
    ogUrl: "https://hisab-58f.pages.dev/terms.html",
    twitterTitle: "Terms of Use — Hisab",
    twitterDescription: "Hisab terms: planning tool, not financial advice.",
  },
};

export const PAGES: Record<string, PageContent> = {
  emi: EMI,
  sip: SIP,
  fd: FD,
  rd: RD,
  ppf: PPF,
  percentage: PERCENTAGE,
  age: AGE,
  cgpa: CGPA,
  bmi: BMI,
  discount: DISCOUNT,
};

/* --------------------- about / privacy / terms pages -------------------- */

export interface InfoSection {
  heading: string;
  paras: string[];
}

export interface InfoPageContent {
  slug: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: InfoSection[];
  faq?: FaqItem[];
  faqHeading?: string;
  updated?: string;
  disclaimer: string;
  jsonLd: string[];
}

export const ABOUT: InfoPageContent = {
  slug: "about",
  eyebrow: "About",
  h1: "About Hisab",
  lead: "Hisab is a small set of calculators for the money questions Indians actually ask. Built by one person, free forever, private by design.",
  sections: [
    {
      heading: "Why this exists",
      paras: [
        "Hisab started with an annoyance: every calculator site felt like a trap. Pop-ups asking for your phone number, 'talk to our advisor' banners, and answers buried under three paragraphs of SEO sludge. All I wanted was a number I could trust.",
        "So Hisab does the opposite. Ten calculators, each doing one job honestly. Type your numbers, get the answer, leave. No accounts, no upsells, no funnel — this is a side project, not a business model.",
      ],
    },
    {
      heading: "How the numbers work",
      paras: [
        "Every calculator uses the standard formulas that banks, boards and the government publish. EMI uses the reducing-balance method with monthly rests — the same maths Indian lenders use for home, car and personal loans. SIP, FD, RD and PPF use standard compounding. CGPA converts with the ×9.5 rule most Indian boards follow.",
        "And everything runs in your browser, on your own device. There is no server on my end that could store your numbers even if I wanted to.",
      ],
    },
    {
      heading: "What Hisab won't do",
      paras: [
        "Hisab won't give you financial advice — it's for planning and learning. The figures are estimates from standard formulas; your bank's final number may differ by a few rupees because of rounding.",
        "A SIP projection is not a promise, PPF rates get revised by the government, and BMI is a rough screening number, not a diagnosis. Anyone who tells you otherwise — on any website — is selling something.",
      ],
    },
    {
      heading: "Who built it",
      paras: [
        "I'm Aditya, a student developer in India. Hisab is hand-built — every word of copy, every formula, every slightly-tilted sticker. If a calculator is wrong or a sentence sounds off, that's on me, and I'd want to know.",
      ],
    },
  ],
  faq: [
    { q: "Is Hisab really free?", a: "Yes — all of it, forever. No accounts, no limits, no 'pro plan'. Hosting a static site costs almost nothing, so there's nothing to charge you for." },
    { q: "Do you store my numbers?", a: "No. Every calculation happens in your browser. Nothing is uploaded, nothing is logged, nothing is sold — there's no backend that could do any of that." },
    { q: "Can I suggest a calculator?", a: "The ten here cover the questions I kept hearing. If there's one you keep needing, the site is a living project — check back." },
  ],
  faqHeading: "About questions",
  disclaimer: DISCLAIMER_FINANCE,
  jsonLd: [
    `{"@context":"https://schema.org","@type":"AboutPage","name":"About Hisab","url":"https://hisab-58f.pages.dev/about.html","description":"Hisab is a free set of money calculators for India, hand-built by Aditya. Every calculation runs privately in your browser."}`,
  ],
};

export const PRIVACY: InfoPageContent = {
  slug: "privacy",
  eyebrow: "Privacy",
  h1: "Privacy Policy",
  lead: "Short version: there's nothing here to track. No accounts, no cookies, no analytics — and your numbers never leave your device.",
  sections: [
    {
      heading: "What we collect",
      paras: [
        "Nothing. Accounts don't exist on Hisab, so there's nothing to sign up for and no profile to build. No cookies are set. No analytics scripts run. There is no database of users because there are no users — just visitors doing maths.",
      ],
    },
    {
      heading: "Where your numbers go",
      paras: [
        "They don't go anywhere. Every calculation runs entirely in your browser, on your own device. When you type a loan amount into the EMI calculator, it never leaves the tab — there is no server on the other end receiving it.",
      ],
    },
    {
      heading: "What the hosting sees",
      paras: [
        "Hisab is served as static files by Cloudflare Pages. Like any website, the hosting infrastructure technically receives standard web requests (your IP address, the page you asked for) in server logs. That's the plumbing of the internet, not tracking — and it's not used for anything.",
      ],
    },
    {
      heading: "Your theme choice",
      paras: [
        "If you switch between light and dark mode, that preference is saved in your browser's local storage — on your device, under your control. Clear your browser data and it's gone.",
      ],
    },
  ],
  updated: "Last updated 13 October 2026.",
  disclaimer: DISCLAIMER_FINANCE,
  jsonLd: [
    `{"@context":"https://schema.org","@type":"WebPage","name":"Privacy Policy — Hisab","url":"https://hisab-58f.pages.dev/privacy.html","description":"Hisab collects nothing: no accounts, no cookies, no analytics. All calculations run in your browser."}`,
  ],
};

export const TERMS: InfoPageContent = {
  slug: "terms",
  eyebrow: "Terms",
  h1: "Terms of Use",
  lead: "Simple terms for a simple tool. By using Hisab, you agree to the following.",
  sections: [
    {
      heading: "Not financial advice",
      paras: [
        "Hisab is for planning and learning, not financial advice. The calculators are built for curiosity and rough planning — for big decisions like loans and investments, talk to your bank or a qualified adviser, not a website.",
      ],
    },
    {
      heading: "Estimates, not promises",
      paras: [
        "Figures come from standard published formulas, but they're still estimates. Banks round differently, rates change, markets move. A projection on this site is a sketch of what could happen, never a guarantee of what will.",
      ],
    },
    {
      heading: "Use it nicely",
      paras: [
        "Don't abuse the site, don't pretend to be us, and don't rely on it for anything where being wrong would hurt you. The content is provided as-is, without warranties.",
      ],
    },
    {
      heading: "Changes",
      paras: [
        "These terms may be updated as the site evolves. Continued use of Hisab after changes means you accept the updated terms.",
      ],
    },
  ],
  updated: "Last updated 13 October 2026.",
  disclaimer: DISCLAIMER_FINANCE,
  jsonLd: [
    `{"@context":"https://schema.org","@type":"WebPage","name":"Terms of Use — Hisab","url":"https://hisab-58f.pages.dev/terms.html","description":"Terms of use for Hisab: planning tool, not financial advice; figures are estimates."}`,
  ],
};

export const INFO_PAGES: Record<string, InfoPageContent> = {
  about: ABOUT,
  privacy: PRIVACY,
  terms: TERMS,
};

export const SITE_LINKS: RelatedLink[] = [
  { href: "about.html", label: "About" },
  { href: "privacy.html", label: "Privacy" },
  { href: "terms.html", label: "Terms" },
];
