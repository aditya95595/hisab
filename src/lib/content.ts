/* Hisab page content — verbatim port of the original site's copy.
   Every title, description, canonical, FAQ, explainer paragraph,
   field label, hint, result label and disclaimer is copied from the
   original HTML. Canonicals keep the existing
   https://hisab-58f.pages.dev/ values exactly. */

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
  /** JSON-LD script bodies, verbatim from the original <head>. */
  jsonLd: string[];
  eyebrow: string;
  h1: string;
  lead: string;
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
  "Calculators on Hisab are for planning and education only — they are not financial advice. Figures are estimates from standard formulas; confirm important decisions with your bank or a qualified adviser.";
export const DISCLAIMER_FINANCE_MF =
  "Calculators on Hisab are for planning and education only — they are not financial advice. Figures are estimates from standard formulas; confirm important decisions with your bank or a qualified adviser. Mutual fund investments are subject to market risks.";
export const DISCLAIMER_MEDICAL =
  "Calculators on Hisab are for planning and education only — they are not medical advice. BMI is a screening tool; consult a qualified professional for health decisions.";
export const COPYRIGHT_LINE = "Free calculators, computed in your browser.";

/* ------------------------------ homepage ------------------------------ */

export interface HomeToolCard {
  href: string;
  title: string;
  blurb: string;
  icon: string; // key into the icon set
}

export const HOME = {
  eyebrow: "Free calculators for India",
  h1a: "Every number you need,",
  h1b: "worked out.",
  heroCopy:
    "Hisab is a fast set of free calculators for the questions Indians actually ask: loan EMIs, SIP growth, FD maturity, percentages, age, CGPA and more. No sign-up, no uploads — everything is computed privately in your browser.",
  badges: ["10 calculators", "100% free", "Private by design", "No account needed"],
  toolsEyebrow: "All calculators",
  toolsHeading: "Pick one and start typing",
  tools: [
    { href: "emi-calculator.html", title: "EMI Calculator", blurb: "Monthly EMI, total interest and payable for any loan.", icon: "rupee" },
    { href: "sip-calculator.html", title: "SIP Calculator", blurb: "See what your monthly SIP can grow into.", icon: "trend" },
    { href: "fd-calculator.html", title: "FD Calculator", blurb: "Fixed deposit maturity value with compounding.", icon: "vault" },
    { href: "rd-calculator.html", title: "RD Calculator", blurb: "Recurring deposit maturity, month by month.", icon: "layers" },
    { href: "ppf-calculator.html", title: "PPF Calculator", blurb: "15-year PPF maturity on your yearly deposit.", icon: "spark" },
    { href: "percentage-calculator.html", title: "Percentage Calculator", blurb: "X% of Y, what-percent, and percent change.", icon: "percent" },
    { href: "age-calculator.html", title: "Age Calculator", blurb: "Exact age in years, months and days.", icon: "clock" },
    { href: "cgpa-calculator.html", title: "CGPA Calculator", blurb: "Convert CGPA to percentage and back.", icon: "grade" },
    { href: "bmi-calculator.html", title: "BMI Calculator", blurb: "Body mass index with WHO category bands.", icon: "gauge" },
    { href: "discount-calculator.html", title: "Discount Calculator", blurb: "Final price and savings on any discount.", icon: "tag" },
  ] as HomeToolCard[],
  whyEyebrow: "Why Hisab",
  whyHeading: "Built for quick, honest answers",
  why: [
    "Most calculator sites bury the answer under pop-ups and sign-up walls. Hisab does the opposite: type your numbers, see the result instantly, and read a short plain-English explanation of what it means. The math uses standard published formulas, and anywhere an assumption is involved — like the PPF interest rate — it is shown and editable, not hidden.",
    "Your numbers never leave your device. There is nothing to upload because there is no server doing the calculation — your browser does it all.",
  ],
  faqEyebrow: "FAQ",
  faqHeading: "Common questions",
  faq: [
    {
      q: "Is Hisab free to use?",
      a: "Yes. Every calculator on Hisab is free, with no accounts, no limits and no hidden charges.",
    },
    {
      q: "Is my data uploaded anywhere?",
      a: "No. All calculations happen in your browser on your own device. Nothing you type is sent to any server.",
    },
    {
      q: "How accurate are the calculators?",
      a: "They use standard published formulas. Results are estimates for planning — your bank's exact figures may differ slightly due to rounding and their own conventions.",
    },
    {
      q: "Do I need to sign up?",
      a: "No. There are no accounts on Hisab. Open a calculator and start typing.",
    },
    {
      q: "Which calculator should I use for a home loan?",
      a: "Use the EMI calculator: enter the loan amount, interest rate and tenure to see your monthly EMI, total interest and total payable.",
    },
  ] as FaqItem[],
  disclaimer: DISCLAIMER_FINANCE,
};

export const HOME_JSONLD = [
  `{"@context":"https://schema.org","@type":"WebApplication","name":"Hisab","url":"https://hisab-58f.pages.dev/","applicationCategory":"FinanceApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"INR"},"description":"Free EMI, SIP, FD, RD, PPF, percentage, age, CGPA, BMI and discount calculators for India. Everything computed in the browser."}`,
  `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is Hisab free to use?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every calculator on Hisab is free, with no accounts, no limits and no hidden charges."}},{"@type":"Question","name":"Is my data uploaded anywhere?","acceptedAnswer":{"@type":"Answer","text":"No. All calculations happen in your browser on your own device. Nothing you type is sent to any server."}},{"@type":"Question","name":"How accurate are the calculators?","acceptedAnswer":{"@type":"Answer","text":"They use standard published formulas. Results are estimates for planning — your bank's exact figures may differ slightly due to rounding and their own conventions."}},{"@type":"Question","name":"Do I need to sign up?","acceptedAnswer":{"@type":"Answer","text":"No. There are no accounts on Hisab. Open a calculator and start typing."}},{"@type":"Question","name":"Which calculator should I use for a home loan?","acceptedAnswer":{"@type":"Answer","text":"Use the EMI calculator: enter the loan amount, interest rate and tenure to see your monthly EMI, total interest and total payable."}}]}`,
];

/* EMI */
export const EMI: PageContent = {
  slug: "emi",
  jsonLd: [
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is EMI?","acceptedAnswer":{"@type":"Answer","text":"EMI (Equated Monthly Instalment) is the fixed amount you pay your lender every month until the loan is fully repaid. It has two parts: interest on the outstanding balance and repayment of the principal."}},{"@type":"Question","name":"Does a longer tenure always mean a lower EMI?","acceptedAnswer":{"@type":"Answer","text":"Yes, stretching the tenure lowers the monthly EMI — but you pay interest for more months, so the total interest paid goes up. Shorter tenures cost more per month but less overall."}},{"@type":"Question","name":"Is the EMI the same every month?","acceptedAnswer":{"@type":"Answer","text":"With a fixed interest rate, yes. Early EMIs are mostly interest; later EMIs are mostly principal. If your loan has a floating rate, the EMI or tenure changes when the rate changes."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "EMI Calculator",
  lead: "Work out your monthly loan EMI from the loan amount, interest rate and tenure. Results update as you type.",
  workspaces: [
    {
      calcName: "emi",
      formLabel: "EMI inputs",
      fieldRows: [
        [{ id: "emi-p", label: "Loan amount (₹)", field: "principal", type: "number", value: "1000000", min: "0", step: "1000", inputmode: "decimal" }],
        [{ id: "emi-r", label: "Interest rate (% per year)", field: "rate", type: "number", value: "9", min: "0", max: "40", step: "0.05", inputmode: "decimal" }],
        [{ id: "emi-n", label: "Tenure (months)", field: "months", type: "number", value: "60", min: "1", max: "360", step: "1", inputmode: "numeric", hint: "Tip: 60 months = 5 years, 120 = 10 years, 240 = 20 years." }],
      ],
      heroLabel: "Monthly EMI",
      heroParts: [{ key: "emi" }],
      rows: [
        { label: "Total interest payable", key: "interest" },
        { label: "Total amount payable", key: "total" },
      ],
      note: "Reducing balance method, monthly rests. Estimates for planning — your lender's rounding may differ slightly.",
    },
  ],
  explainHeading: "How EMI works",
  explain: [
    "EMI stands for Equated Monthly Instalment — the fixed sum you pay every month until a loan is cleared. Each EMI splits into interest (on what you still owe) and principal repayment. Early in the loan, most of your EMI is interest; near the end, most of it is principal.",
    "This calculator uses the standard reducing-balance formula lenders use for home, car and personal loans in India. If your loan has a floating rate, treat the result as a snapshot at today's rate.",
  ],
  faqHeading: "EMI questions, answered",
  faq: [
    { q: "What is EMI?", a: "EMI (Equated Monthly Instalment) is the fixed amount you pay your lender every month until the loan is fully repaid. It has two parts: interest on the outstanding balance and repayment of the principal." },
    { q: "Does a longer tenure always mean a lower EMI?", a: "Yes, stretching the tenure lowers the monthly EMI — but you pay interest for more months, so the total interest paid goes up. Shorter tenures cost more per month but less overall." },
    { q: "Is the EMI the same every month?", a: "With a fixed interest rate, yes. Early EMIs are mostly interest; later EMIs are mostly principal. If your loan has a floating rate, the EMI or tenure changes when the rate changes." },
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
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a good expected return to assume for SIP?","acceptedAnswer":{"@type":"Answer","text":"Many planners use 10–12% a year for long-term equity SIPs as an illustration, but actual returns vary and are never guaranteed. Use a conservative number when planning."}},{"@type":"Question","name":"Is SIP better than a lump sum investment?","acceptedAnswer":{"@type":"Answer","text":"Neither is universally better. SIPs spread investments over time, which suits salaried investors and smooths market ups and downs; lump sums can win if markets rise steadily, but carry timing risk."}},{"@type":"Question","name":"Are SIP returns guaranteed?","acceptedAnswer":{"@type":"Answer","text":"No. SIPs invest in market-linked mutual funds, so returns move with the market. This calculator shows a projection at your assumed return, not a promise."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "SIP Calculator",
  lead: "Project what a monthly SIP could grow into. Enter your investment, expected annual return and time period — results update as you type.",
  workspaces: [
    {
      calcName: "sip",
      formLabel: "SIP inputs",
      fieldRows: [
        [{ id: "sip-m", label: "Monthly investment (₹)", field: "monthly", type: "number", value: "10000", min: "0", step: "500", inputmode: "decimal" }],
        [{ id: "sip-r", label: "Expected return (% per year)", field: "rate", type: "number", value: "12", min: "0", max: "30", step: "0.5", inputmode: "decimal", hint: "An assumption for illustration — markets never guarantee it." }],
        [{ id: "sip-y", label: "Time period (years)", field: "years", type: "number", value: "10", min: "1", max: "40", step: "1", inputmode: "numeric" }],
      ],
      heroLabel: "Projected maturity value",
      heroParts: [{ key: "maturity" }],
      rows: [
        { label: "Total invested", key: "invested" },
        { label: "Estimated gains", key: "gains" },
      ],
      note: "Monthly compounding, investments assumed at the start of each month. A projection, not a promise.",
    },
  ],
  explainHeading: "How SIP growth works",
  explain: [
    "A Systematic Investment Plan invests a fixed sum every month into a mutual fund. Because markets move, your fixed amount buys more units when prices are low and fewer when prices are high — this averaging is the core appeal of SIPs.",
    "Over long periods, compounding does the heavy lifting: in the later years, growth on past growth can exceed your fresh contributions. That is why starting early usually matters more than investing big.",
  ],
  faqHeading: "SIP questions, answered",
  faq: [
    { q: "What is a good expected return to assume for SIP?", a: "Many planners use 10–12% a year for long-term equity SIPs as an illustration, but actual returns vary and are never guaranteed. Use a conservative number when planning." },
    { q: "Is SIP better than a lump sum investment?", a: "Neither is universally better. SIPs spread investments over time, which suits salaried investors and smooths market ups and downs; lump sums can win if markets rise steadily, but carry timing risk." },
    { q: "Are SIP returns guaranteed?", a: "No. SIPs invest in market-linked mutual funds, so returns move with the market. This calculator shows a projection at your assumed return, not a promise." },
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
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is compounding frequency in FD?","acceptedAnswer":{"@type":"Answer","text":"It is how often the bank adds interest to your deposit — yearly, half-yearly, quarterly or monthly. More frequent compounding gives a slightly higher maturity value at the same rate."}},{"@type":"Question","name":"Is FD interest taxable?","acceptedAnswer":{"@type":"Answer","text":"Yes, FD interest is taxable as per your income slab in India. Banks also deduct TDS if your interest crosses the threshold in a financial year."}},{"@type":"Question","name":"Can I break an FD before maturity?","acceptedAnswer":{"@type":"Answer","text":"Usually yes, but most banks charge a premature-withdrawal penalty (often around 1%) and pay interest at a lower rate for the period completed."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "FD Calculator",
  lead: "Find your fixed deposit's maturity value. Enter the amount, rate, tenure and compounding frequency — results update as you type.",
  workspaces: [
    {
      calcName: "fd",
      formLabel: "FD inputs",
      fieldRows: [
        [{ id: "fd-p", label: "Deposit amount (₹)", field: "principal", type: "number", value: "100000", min: "0", step: "1000", inputmode: "decimal" }],
        [{ id: "fd-r", label: "Interest rate (% per year)", field: "rate", type: "number", value: "7", min: "0", max: "20", step: "0.05", inputmode: "decimal" }],
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
      heroLabel: "Maturity value",
      heroParts: [{ key: "maturity" }],
      rows: [
        { label: "Amount invested", key: "invested" },
        { label: "Interest earned", key: "interest" },
      ],
      note: "Standard compound-interest formula. Before tax and TDS.",
    },
  ],
  explainHeading: "How FD growth works",
  explain: [
    "A fixed deposit earns compound interest: each compounding period, the interest is added to your balance, and the next period's interest is calculated on the bigger sum. Quarterly compounding — the most common for Indian bank FDs — is the default here.",
    "The rate you see is per year, but compounding frequency decides how hard it works. Monthly compounding on the same rate gives a slightly higher maturity value than yearly compounding.",
  ],
  faqHeading: "FD questions, answered",
  faq: [
    { q: "What is compounding frequency in FD?", a: "It is how often the bank adds interest to your deposit — yearly, half-yearly, quarterly or monthly. More frequent compounding gives a slightly higher maturity value at the same rate." },
    { q: "Is FD interest taxable?", a: "Yes, FD interest is taxable as per your income slab in India. Banks also deduct TDS if your interest crosses the threshold in a financial year." },
    { q: "Can I break an FD before maturity?", a: "Usually yes, but most banks charge a premature-withdrawal penalty (often around 1%) and pay interest at a lower rate for the period completed." },
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
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"RD vs FD — which is better?","acceptedAnswer":{"@type":"Answer","text":"FD suits a lump sum you already have; RD suits building savings month by month from income. At the same rate and tenure, an FD of the full amount earns more because the whole sum compounds from day one."}},{"@type":"Question","name":"What happens if I miss an RD instalment?","acceptedAnswer":{"@type":"Answer","text":"Most banks charge a small penalty per missed instalment (often around ₹10 per ₹100 of instalment). Repeated misses can lead the bank to close the RD and pay savings-account interest instead."}},{"@type":"Question","name":"Is RD interest taxable?","acceptedAnswer":{"@type":"Answer","text":"Yes. RD interest is taxable as per your income slab, and TDS applies when interest crosses the threshold in a financial year."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "RD Calculator",
  lead: "Project your recurring deposit's maturity value from a monthly deposit, interest rate and tenure. Results update as you type.",
  workspaces: [
    {
      calcName: "rd",
      formLabel: "RD inputs",
      fieldRows: [
        [{ id: "rd-m", label: "Monthly deposit (₹)", field: "monthly", type: "number", value: "5000", min: "0", step: "500", inputmode: "decimal" }],
        [{ id: "rd-r", label: "Interest rate (% per year)", field: "rate", type: "number", value: "7", min: "0", max: "20", step: "0.05", inputmode: "decimal" }],
        [{ id: "rd-y", label: "Tenure (years)", field: "years", type: "number", value: "5", min: "0.5", max: "10", step: "0.5", inputmode: "decimal" }],
      ],
      heroLabel: "Maturity value",
      heroParts: [{ key: "maturity" }],
      rows: [
        { label: "Total deposited", key: "invested" },
        { label: "Interest earned", key: "interest" },
      ],
      note: "Approximate: quarterly compounding via effective monthly rate, deposits at month start. Before tax.",
    },
  ],
  explainHeading: "How RD growth works",
  explain: [
    "A recurring deposit turns a monthly habit into a lump sum: you deposit a fixed amount every month, and the bank compounds interest quarterly. Earlier deposits earn for longer, so starting early matters even with small amounts.",
    "Indian banks compound RD interest quarterly. This calculator converts that into an effective monthly rate, which matches bank figures closely enough for planning.",
  ],
  faqHeading: "RD questions, answered",
  faq: [
    { q: "RD vs FD — which is better?", a: "FD suits a lump sum you already have; RD suits building savings month by month from income. At the same rate and tenure, an FD of the full amount earns more because the whole sum compounds from day one." },
    { q: "What happens if I miss an RD instalment?", a: "Most banks charge a small penalty per missed instalment (often around ₹10 per ₹100 of instalment). Repeated misses can lead the bank to close the RD and pay savings-account interest instead." },
    { q: "Is RD interest taxable?", a: "Yes. RD interest is taxable as per your income slab, and TDS applies when interest crosses the threshold in a financial year." },
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
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the current PPF interest rate?","acceptedAnswer":{"@type":"Answer","text":"The government revises the PPF rate every quarter; it has been 7.1% per year for an extended period. Because it can change, this calculator lets you edit the assumed rate instead of hard-coding it."}},{"@type":"Question","name":"Can I extend PPF after 15 years?","acceptedAnswer":{"@type":"Answer","text":"Yes. After the initial 15 years you can extend in blocks of 5 years, with or without fresh contributions, and keep earning interest."}},{"@type":"Question","name":"Is PPF tax-free?","acceptedAnswer":{"@type":"Answer","text":"Yes — PPF enjoys EEE status in India: deposits qualify for 80C deduction, interest is tax-free, and the maturity amount is tax-free."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "PPF Calculator",
  lead: "Project your Public Provident Fund maturity over its 15-year term. The interest rate is an editable assumption — change it any time.",
  workspaces: [
    {
      calcName: "ppf",
      formLabel: "PPF inputs",
      fieldRows: [
        [{ id: "ppf-a", label: "Yearly deposit (₹)", field: "yearly", type: "number", value: "150000", min: "500", max: "150000", step: "5000", inputmode: "decimal", hint: "Minimum ₹500, maximum ₹1,50,000 per financial year." }],
        [{ id: "ppf-r", label: "Assumed interest rate (% per year)", field: "rate", type: "number", value: "7.1", min: "0", max: "15", step: "0.1", inputmode: "decimal", hint: "The government revises this quarterly — edit it to match the current rate." }],
      ],
      heroLabel: "Maturity after 15 years",
      heroParts: [{ key: "maturity" }],
      rows: [
        { label: "Total deposited", key: "invested" },
        { label: "Interest earned", key: "interest" },
      ],
      note: "Deposits assumed at the start of each year; rate held constant for the full term. A projection, not a promise.",
    },
  ],
  explainHeading: "How PPF growth works",
  explain: [
    "The Public Provident Fund runs for 15 years with yearly deposits between ₹500 and ₹1,50,000. Interest compounds yearly, and because deposits made early in the financial year earn for the full year, the convention is to treat them as start-of-year deposits.",
    "PPF's headline feature is its tax treatment: EEE — the deposit gets 80C deduction, the interest is tax-free, and the maturity amount is tax-free. The rate itself is set by the government and revised quarterly, which is why this calculator keeps it as an editable assumption.",
  ],
  faqHeading: "PPF questions, answered",
  faq: [
    { q: "What is the current PPF interest rate?", a: "The government revises the PPF rate every quarter; it has been 7.1% per year for an extended period. Because it can change, this calculator lets you edit the assumed rate instead of hard-coding it." },
    { q: "Can I extend PPF after 15 years?", a: "Yes. After the initial 15 years you can extend in blocks of 5 years, with or without fresh contributions, and keep earning interest." },
    { q: "Is PPF tax-free?", a: "Yes — PPF enjoys EEE status in India: deposits qualify for 80C deduction, interest is tax-free, and the maturity amount is tax-free." },
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
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I find X percent of Y?","acceptedAnswer":{"@type":"Answer","text":"Multiply X by Y and divide by 100. For example, 15% of 200 is (15 × 200) ÷ 100 = 30."}},{"@type":"Question","name":"How do I find what percent X is of Y?","acceptedAnswer":{"@type":"Answer","text":"Divide X by Y and multiply by 100. For example, 30 is (30 ÷ 200) × 100 = 15% of 200."}},{"@type":"Question","name":"What is the difference between percent and percentage points?","acceptedAnswer":{"@type":"Answer","text":"A move from 10% to 15% is a 5-percentage-point rise, but a 50% relative increase. Mixing the two is one of the most common percentage mistakes."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "Percentage Calculator",
  lead: "Three everyday percentage problems, solved instantly as you type.",
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
      note: "Positive = increase, negative = decrease.",
    },
  ],
  explainHeading: "Percentages without the headache",
  explain: [
    'Nearly every percentage question is one of these three shapes. "X% of Y" comes up in discounts and marks; "X is what % of Y" in scores and shares; "percent change" in prices, salaries and growth.',
    "The classic trap is percentage points vs percent: a rise from 10% to 15% is 5 percentage points, but a 50% relative increase. Keep them straight and the numbers stay honest.",
  ],
  faqHeading: "Percentage questions, answered",
  faq: [
    { q: "How do I find X percent of Y?", a: "Multiply X by Y and divide by 100. For example, 15% of 200 is (15 × 200) ÷ 100 = 30." },
    { q: "How do I find what percent X is of Y?", a: "Divide X by Y and multiply by 100. For example, 30 is (30 ÷ 200) × 100 = 15% of 200." },
    { q: "What is the difference between percent and percentage points?", a: "A move from 10% to 15% is a 5-percentage-point rise, but a 50% relative increase. Mixing the two is one of the most common percentage mistakes." },
  ],
  related: [
    /* NOTE: the original had href=" discount-calculator.html" (leading space);
       browsers trim it; normalised here to the same target. */
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
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How is age in months and days calculated?","acceptedAnswer":{"@type":"Answer","text":"By calendar difference: full years first, then remaining full months, then remaining days — accounting for the different lengths of months and leap years."}},{"@type":"Question","name":"Why does my age differ across calculators?","acceptedAnswer":{"@type":"Answer","text":"Some calculators divide total days by 365.25, which approximates. A calendar-correct method counts actual years, months and days, and handles leap years exactly."}},{"@type":"Question","name":"Does the age calculator work for future dates?","acceptedAnswer":{"@type":"Answer","text":"No — a birthdate in the future is not a valid age. The calculator asks for a date on or before today."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "Age Calculator",
  lead: "Your exact age in years, months and days — plus a countdown to your next birthday.",
  workspaces: [
    {
      calcName: "age",
      formLabel: "Age inputs",
      fieldRows: [
        [{ id: "age-b", label: "Date of birth", field: "birthdate", type: "date", value: "2000-01-01", dynamicMaxToday: true }],
      ],
      heroLabel: "Your age",
      heroParts: [
        { key: "years", suffix: " yrs " },
        { key: "months", suffix: " mo " },
        { key: "days", suffix: " days" },
      ],
      rows: [
        { label: "Next birthday in", key: "next" },
        { label: "Total days lived", key: "lived" },
      ],
      note: "Calendar-correct: real month lengths and leap years.",
    },
  ],
  explainHeading: "How exact age is worked out",
  explain: [
    "Counting age looks simple until leap years and 28-day Februaries get involved. The correct method counts full years first, then full months, then leftover days — using each month's actual length.",
    "That is why two calculators can disagree by a day: approximations divide total days by 365.25, while this one walks the calendar properly.",
  ],
  faqHeading: "Age questions, answered",
  faq: [
    { q: "How is age in months and days calculated?", a: "By calendar difference: full years first, then remaining full months, then remaining days — accounting for the different lengths of months and leap years." },
    { q: "Why does my age differ across calculators?", a: "Some calculators divide total days by 365.25, which approximates. A calendar-correct method counts actual years, months and days, and handles leap years exactly." },
    { q: "Does the age calculator work for future dates?", a: "No — a birthdate in the future is not a valid age. The calculator asks for a date on or before today." },
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
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do you convert CGPA to percentage?","acceptedAnswer":{"@type":"Answer","text":"Under the CBSE convention, multiply your CGPA by 9.5. For example, a CGPA of 8.6 is 8.6 × 9.5 = 81.7%."}},{"@type":"Question","name":"Is the 9.5 multiplier used by all boards?","acceptedAnswer":{"@type":"Answer","text":"No. The ×9.5 formula is CBSE's official conversion. Other boards and universities use their own formulas — always check your institution's rule for official purposes."}},{"@type":"Question","name":"How do I convert percentage back to CGPA?","acceptedAnswer":{"@type":"Answer","text":"Divide the percentage by 9.5 under the CBSE convention. For example, 81.7% ÷ 9.5 = 8.6 CGPA."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "CGPA Calculator",
  lead: "Convert CGPA to percentage and back, using the CBSE ×9.5 convention.",
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
  explainHeading: "The ×9.5 rule, explained",
  explain: [
    "CBSE's official conversion multiplies CGPA by 9.5 to get the percentage — so 8.6 CGPA becomes 81.7%. It is a board-level convention, not a universal law of mathematics.",
    "Other boards and universities publish their own formulas, and some ask for CGPA directly. For job forms and admissions, always follow the converting rule printed by your own institution.",
  ],
  faqHeading: "CGPA questions, answered",
  faq: [
    { q: "How do you convert CGPA to percentage?", a: "Under the CBSE convention, multiply your CGPA by 9.5. For example, a CGPA of 8.6 is 8.6 × 9.5 = 81.7%." },
    { q: "Is the 9.5 multiplier used by all boards?", a: "No. The ×9.5 formula is CBSE's official conversion. Other boards and universities use their own formulas — always check your institution's rule for official purposes." },
    { q: "How do I convert percentage back to CGPA?", a: "Divide the percentage by 9.5 under the CBSE convention. For example, 81.7% ÷ 9.5 = 8.6 CGPA." },
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
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a healthy BMI?","acceptedAnswer":{"@type":"Answer","text":"WHO defines 18.5–24.9 as the normal range for adults. Below 18.5 is underweight, 25–29.9 is overweight, and 30 or above is obese."}},{"@type":"Question","name":"Is BMI accurate for athletes?","acceptedAnswer":{"@type":"Answer","text":"Not always. BMI cannot tell muscle from fat, so muscular people can score as overweight while being very fit. It is a screening tool, not a diagnosis."}},{"@type":"Question","name":"Are the cutoffs different for Indians?","acceptedAnswer":{"@type":"Answer","text":"Some Indian health guidelines suggest lower action cutoffs (around 23 for overweight and 27.5 for obese) because metabolic risk rises earlier in South Asian populations. This calculator shows WHO bands and notes the difference."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "BMI Calculator",
  lead: "Your body mass index from height and weight, with the standard WHO category bands.",
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
      note: "Under 18.5 underweight · 18.5–24.9 normal · 25–29.9 overweight · 30+ obese. Some Indian guidelines use lower cutoffs (23 / 27.5).",
    },
  ],
  explainHeading: "What BMI tells you — and what it doesn't",
  explain: [
    "BMI is weight in kilograms divided by height in metres squared. It is a quick screening number: useful for populations and a reasonable first check for individuals.",
    "Its blind spot is composition — it cannot distinguish muscle from fat. Athletes often land in \"overweight\" while being very fit, and it says nothing about where fat sits. Treat it as a starting point, not a verdict.",
  ],
  faqHeading: "BMI questions, answered",
  faq: [
    { q: "What is a healthy BMI?", a: "WHO defines 18.5–24.9 as the normal range for adults. Below 18.5 is underweight, 25–29.9 is overweight, and 30 or above is obese." },
    { q: "Is BMI accurate for athletes?", a: "Not always. BMI cannot tell muscle from fat, so muscular people can score as overweight while being very fit. It is a screening tool, not a diagnosis." },
    { q: "Are the cutoffs different for Indians?", a: "Some Indian health guidelines suggest lower action cutoffs (around 23 for overweight and 27.5 for obese) because metabolic risk rises earlier in South Asian populations. This calculator shows WHO bands and notes the difference." },
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
    `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do you calculate a discount?","acceptedAnswer":{"@type":"Answer","text":"Multiply the price by the discount percent, divide by 100, and subtract from the price. A 20% discount on ₹1,000 is ₹1,000 − ₹200 = ₹800."}},{"@type":"Question","name":"How do stacked discounts work, like 20% + 10%?","acceptedAnswer":{"@type":"Answer","text":"They apply one after another, not added together. 20% off ₹1,000 is ₹800; then 10% off ₹800 is ₹720 — a total of 28% off, not 30%."}},{"@type":"Question","name":"Does the discount apply before or after tax?","acceptedAnswer":{"@type":"Answer","text":"It depends on the seller and the tax rules. Most Indian retail discounts apply to the pre-tax price, with GST calculated on the discounted amount — check the bill to be sure."}}]}`,
  ],
  eyebrow: "Free calculator",
  h1: "Discount Calculator",
  lead: "The real price after a discount — and exactly how much you keep in your pocket.",
  workspaces: [
    {
      calcName: "discount",
      formLabel: "Discount inputs",
      fieldRows: [
        [
          { id: "d-p", label: "Original price (₹)", field: "price", type: "number", value: "1000", min: "0", step: "any", inputmode: "decimal" },
          { id: "d-d", label: "Discount (%)", field: "percent", type: "number", value: "20", min: "0", max: "100", step: "any", inputmode: "decimal" },
        ],
      ],
      heroLabel: "You pay",
      heroParts: [{ key: "final" }],
      rows: [{ label: "You save", key: "save" }],
      note: "Before taxes and extra coupon codes.",
    },
  ],
  explainHeading: "Reading discount tags honestly",
  explain: [
    'A "20% off" tag is simple: you pay 80% of the price. The confusion starts with stacked offers — "20% + extra 10%" is not 30% off, because the second discount applies to the already-reduced price.',
    "Also watch the base: discounts are usually on the pre-tax price in India, with GST computed after the discount. The bill is the final word.",
  ],
  faqHeading: "Discount questions, answered",
  faq: [
    { q: "How do you calculate a discount?", a: "Multiply the price by the discount percent, divide by 100, and subtract from the price. A 20% discount on ₹1,000 is ₹1,000 − ₹200 = ₹800." },
    { q: "How do stacked discounts work, like 20% + 10%?", a: "They apply one after another, not added together. 20% off ₹1,000 is ₹800; then 10% off ₹800 is ₹720 — a total of 28% off, not 30%." },
    { q: "Does the discount apply before or after tax?", a: "It depends on the seller and the tax rules. Most Indian retail discounts apply to the pre-tax price, with GST calculated on the discounted amount — check the bill to be sure." },
  ],
  related: [
    { href: "percentage-calculator.html", label: "Percentage Calculator" },
    { href: "emi-calculator.html", label: "EMI Calculator" },
    { href: "bmi-calculator.html", label: "BMI Calculator" },
    { href: "age-calculator.html", label: "Age Calculator" },
  ],
  disclaimer: DISCLAIMER_FINANCE,
};

/* Head metadata per page — verbatim from the originals. */
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
    description: "Hisab is a free set of calculators for India: EMI, SIP, FD, RD, PPF, percentage, age, CGPA, BMI and discount. No sign-up, everything computed privately in your browser.",
    canonical: "https://hisab-58f.pages.dev/",
    ogTitle: "Hisab — Free Calculators for India",
    ogDescription: "EMI, SIP, FD, RD, PPF, percentage, age, CGPA, BMI and discount calculators. Free, private, no sign-up.",
    ogUrl: "https://hisab-58f.pages.dev/",
    twitterTitle: "Hisab — Free Calculators for India",
    twitterDescription: "EMI, SIP, FD, RD, PPF, percentage, age, CGPA, BMI and discount calculators. Free, private, no sign-up.",
  },
  emi: {
    title: "EMI Calculator — Monthly Loan EMI Online | Hisab",
    description: "Free EMI calculator: enter loan amount, interest rate and tenure to get your monthly EMI, total interest and total payable. Private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/emi-calculator.html",
    ogTitle: "EMI Calculator — Monthly Loan EMI Online",
    ogDescription: "Free EMI calculator: monthly EMI, total interest and total payable for any loan.",
    ogUrl: "https://hisab-58f.pages.dev/emi-calculator.html",
    twitterTitle: "EMI Calculator — Monthly Loan EMI Online",
    twitterDescription: "Free EMI calculator: monthly EMI, total interest and total payable for any loan.",
  },
  sip: {
    title: "SIP Calculator — Mutual Fund SIP Returns Online | Hisab",
    description: "Free SIP calculator: enter monthly investment, expected return and years to see invested amount, gains and maturity value. Private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/sip-calculator.html",
    ogTitle: "SIP Calculator — Mutual Fund SIP Returns Online",
    ogDescription: "Free SIP calculator: invested amount, estimated gains and maturity value.",
    ogUrl: "https://hisab-58f.pages.dev/sip-calculator.html",
    twitterTitle: "SIP Calculator — Mutual Fund SIP Returns Online",
    twitterDescription: "Free SIP calculator: invested amount, estimated gains and maturity value.",
  },
  fd: {
    title: "FD Calculator — Fixed Deposit Maturity Value | Hisab",
    description: "Free FD calculator: enter deposit amount, interest rate, tenure and compounding frequency to get maturity value and interest earned. Private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/fd-calculator.html",
    ogTitle: "FD Calculator — Fixed Deposit Maturity Value",
    ogDescription: "Free FD calculator: maturity value and interest earned on your fixed deposit.",
    ogUrl: "https://hisab-58f.pages.dev/fd-calculator.html",
    twitterTitle: "FD Calculator — Fixed Deposit Maturity Value",
    twitterDescription: "Free FD calculator: maturity value and interest earned on your fixed deposit.",
  },
  rd: {
    title: "RD Calculator — Recurring Deposit Maturity Value | Hisab",
    description: "Free RD calculator: enter monthly deposit, interest rate and years to get maturity value and interest earned. Private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/rd-calculator.html",
    ogTitle: "RD Calculator — Recurring Deposit Maturity Value",
    ogDescription: "Free RD calculator: maturity value and interest earned on monthly deposits.",
    ogUrl: "https://hisab-58f.pages.dev/rd-calculator.html",
    twitterTitle: "RD Calculator — Recurring Deposit Maturity Value",
    twitterDescription: "Free RD calculator: maturity value and interest earned on monthly deposits.",
  },
  ppf: {
    title: "PPF Calculator — PPF Maturity After 15 Years | Hisab",
    description: "Free PPF calculator: enter yearly deposit and assumed interest rate to project your 15-year PPF maturity, deposits and interest. Private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/ppf-calculator.html",
    ogTitle: "PPF Calculator — PPF Maturity After 15 Years",
    ogDescription: "Free PPF calculator: 15-year maturity on your yearly deposit, with editable rate assumption.",
    ogUrl: "https://hisab-58f.pages.dev/ppf-calculator.html",
    twitterTitle: "PPF Calculator — PPF Maturity After 15 Years",
    twitterDescription: "Free PPF calculator: 15-year maturity on your yearly deposit, with editable rate assumption.",
  },
  percentage: {
    title: "Percentage Calculator — X% of Y, Percent Change | Hisab",
    description: "Free percentage calculator: find X% of Y, what percent X is of Y, and percentage increase or decrease. Instant, private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/percentage-calculator.html",
    ogTitle: "Percentage Calculator — X% of Y, Percent Change",
    ogDescription: "Free percentage calculator: X% of Y, what-percent, and percent increase/decrease.",
    ogUrl: "https://hisab-58f.pages.dev/percentage-calculator.html",
    twitterTitle: "Percentage Calculator — X% of Y, Percent Change",
    twitterDescription: "Free percentage calculator: X% of Y, what-percent, and percent increase/decrease.",
  },
  age: {
    title: "Age Calculator — Exact Age in Years, Months & Days | Hisab",
    description: "Free age calculator: enter your birthdate to get your exact age in years, months and days, plus days until your next birthday. Private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/age-calculator.html",
    ogTitle: "Age Calculator — Exact Age in Years, Months & Days",
    ogDescription: "Free age calculator: exact age plus next-birthday countdown.",
    ogUrl: "https://hisab-58f.pages.dev/age-calculator.html",
    twitterTitle: "Age Calculator — Exact Age in Years, Months & Days",
    twitterDescription: "Free age calculator: exact age plus next-birthday countdown.",
  },
  cgpa: {
    title: "CGPA Calculator — Convert CGPA to Percentage | Hisab",
    description: "Free CGPA calculator: convert CGPA to percentage (×9.5 CBSE formula) and percentage back to CGPA. Instant, private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/cgpa-calculator.html",
    ogTitle: "CGPA Calculator — Convert CGPA to Percentage",
    ogDescription: "Free CGPA calculator: CGPA to percentage (×9.5) and back.",
    ogUrl: "https://hisab-58f.pages.dev/cgpa-calculator.html",
    twitterTitle: "CGPA Calculator — Convert CGPA to Percentage",
    twitterDescription: "Free CGPA calculator: CGPA to percentage (×9.5) and back.",
  },
  bmi: {
    title: "BMI Calculator — Body Mass Index Online | Hisab",
    description: "Free BMI calculator: enter height and weight to get your body mass index and WHO category. Instant, private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/bmi-calculator.html",
    ogTitle: "BMI Calculator — Body Mass Index Online",
    ogDescription: "Free BMI calculator: your BMI with WHO category bands.",
    ogUrl: "https://hisab-58f.pages.dev/bmi-calculator.html",
    twitterTitle: "BMI Calculator — Body Mass Index Online",
    twitterDescription: "Free BMI calculator: your BMI with WHO category bands.",
  },
  discount: {
    title: "Discount Calculator — Final Price & Savings | Hisab",
    description: "Free discount calculator: enter price and discount percent to get the final price and how much you save. Instant, private, no sign-up.",
    canonical: "https://hisab-58f.pages.dev/discount-calculator.html",
    ogTitle: "Discount Calculator — Final Price & Savings",
    ogDescription: "Free discount calculator: final price and total savings on any discount.",
    ogUrl: "https://hisab-58f.pages.dev/discount-calculator.html",
    twitterTitle: "Discount Calculator — Final Price & Savings",
    twitterDescription: "Free discount calculator: final price and total savings on any discount.",
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
