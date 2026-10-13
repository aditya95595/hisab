/* Hisab shared calculator engine.
   Exact TypeScript port of the original calc.js — every formula,
   every guard, and the en-IN number formatting are identical.
   The original's render() wrote into data-result nodes; here the
   React layer consumes the returned result maps instead. */

const inr0 = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
const inr2 = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const num2 = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 });

export type FormatKind = "inr" | "inr2" | "num" | "int" | "pct" | "yrs" | "txt";

export const FMT: Record<FormatKind, (v: number) => string> = {
  inr: (v) => "₹" + inr0.format(v),
  inr2: (v) => "₹" + inr2.format(v),
  num: (v) => num2.format(v),
  int: (v) => inr0.format(Math.round(v)),
  pct: (v) => num2.format(v) + " %",
  yrs: (v) => num2.format(v) + " yrs",
  txt: (v) => String(v),
};

export function formatValue(value: number, kind: FormatKind): string {
  return (FMT[kind] ?? FMT.num)(value);
}

/** A result map: result key -> [numeric value, format kind]. */
export type CalcResult = Record<string, [number, FormatKind]>;

/** String results (e.g. BMI category) ride alongside as a plain map. */
export type StringResults = Record<string, string>;

function num(v: unknown): number {
  const n = parseFloat(String(v));
  return Number.isFinite(n) ? n : NaN;
}

function ok(...vals: number[]): boolean {
  for (const v of vals) {
    if (!(v >= 0)) return false;
  }
  return true;
}

export interface CalcDef {
  run: (vals: Record<string, number | string>) => CalcResult | null;
}

export const CALC: Record<string, CalcDef> = {
  /* EMI: P*r*(1+r)^n / ((1+r)^n - 1), r = monthly rate */
  emi: {
    run: (v) => {
      const P = num(v.principal),
        i = num(v.rate) / 1200,
        n = Math.round(num(v.months));
      if (!(P > 0) || !(n > 0) || !(num(v.rate) >= 0)) return null;
      const emi =
        i > 0 ? (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1) : P / n;
      const total = emi * n;
      return {
        emi: [emi, "inr"],
        interest: [total - P, "inr"],
        total: [total, "inr"],
      };
    },
  },

  /* SIP: annuity-due future value, monthly compounding */
  sip: {
    run: (v) => {
      const M = num(v.monthly),
        i = num(v.rate) / 1200,
        n = Math.round(num(v.years) * 12);
      if (!(M > 0) || !(n > 0) || !(num(v.rate) >= 0)) return null;
      const fv =
        i > 0 ? M * ((Math.pow(1 + i, n) - 1) / i) * (1 + i) : M * n;
      const invested = M * n;
      return {
        maturity: [fv, "inr"],
        invested: [invested, "inr"],
        gains: [fv - invested, "inr"],
      };
    },
  },

  /* FD: P*(1+r/f)^(f*t) */
  fd: {
    run: (v) => {
      const P = num(v.principal),
        r = num(v.rate),
        t = num(v.years),
        f = num(v.freq);
      if (!(P > 0) || !(t > 0) || !(r >= 0) || !(f > 0)) return null;
      const fv = P * Math.pow(1 + r / (100 * f), f * t);
      return {
        maturity: [fv, "inr"],
        invested: [P, "inr"],
        interest: [fv - P, "inr"],
      };
    },
  },

  /* RD: monthly deposits, quarterly compounding via effective monthly rate */
  rd: {
    run: (v) => {
      const M = num(v.monthly),
        r = num(v.rate),
        n = Math.round(num(v.years) * 12);
      if (!(M > 0) || !(n > 0) || !(r >= 0)) return null;
      const im = r > 0 ? Math.pow(1 + r / 400, 1 / 3) - 1 : 0;
      const fv =
        im > 0 ? M * ((Math.pow(1 + im, n) - 1) / im) * (1 + im) : M * n;
      const invested = M * n;
      return {
        maturity: [fv, "inr"],
        invested: [invested, "inr"],
        interest: [fv - invested, "inr"],
      };
    },
  },

  /* PPF: annuity-due, 15 years, user-editable assumed rate */
  ppf: {
    run: (v) => {
      const A = num(v.yearly),
        i = num(v.rate) / 100,
        n = 15;
      if (!(A > 0) || !(i >= 0)) return null;
      const fv = i > 0 ? A * ((Math.pow(1 + i, n) - 1) / i) * (1 + i) : A * n;
      const invested = A * n;
      return {
        maturity: [fv, "inr"],
        invested: [invested, "inr"],
        interest: [fv - invested, "inr"],
      };
    },
  },

  /* Percentage: three independent modes */
  pct1: {
    run: (v) => {
      /* X% of Y */
      const x = num(v.x),
        y = num(v.y);
      if (!ok(x, y)) return null;
      return { answer: [(x / 100) * y, "num"] };
    },
  },
  pct2: {
    run: (v) => {
      /* X is what % of Y */
      const x = num(v.x),
        y = num(v.y);
      if (!ok(x) || !(y > 0)) return null;
      return { answer: [(x / y) * 100, "pct"] };
    },
  },
  pct3: {
    run: (v) => {
      /* % change A -> B */
      const a = num(v.a),
        b = num(v.b);
      if (!ok(a) || !(a !== 0)) return null;
      return { answer: [((b - a) / a) * 100, "pct"] };
    },
  },

  /* Age: calendar-correct Y/M/D + next birthday + days lived */
  age: {
    run: (v) => {
      const s = String(v.birthdate ?? "");
      if (!s) return null;
      const b = new Date(s + "T00:00:00"),
        now = new Date();
      if (isNaN(b.getTime()) || b > now) return null;
      let y = now.getFullYear() - b.getFullYear(),
        m = now.getMonth() - b.getMonth(),
        d = now.getDate() - b.getDate();
      if (d < 0) {
        m--;
        d += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      }
      if (m < 0) {
        y--;
        m += 12;
      }
      let nb = new Date(now.getFullYear(), b.getMonth(), b.getDate());
      if (nb <= now) nb = new Date(now.getFullYear() + 1, b.getMonth(), b.getDate());
      const daysTo = Math.ceil((nb.getTime() - now.getTime()) / 864e5);
      const lived = Math.floor((now.getTime() - b.getTime()) / 864e5);
      return {
        years: [y, "int"],
        months: [m, "int"],
        days: [d, "int"],
        next: [daysTo, "int"],
        lived: [lived, "int"],
      };
    },
  },

  /* CGPA <-> percentage (CBSE x9.5 convention) */
  cgpa1: {
    run: (v) => {
      const c = num(v.cgpa);
      if (!(c >= 0) || c > 10) return null;
      return { answer: [c * 9.5, "pct"] };
    },
  },
  cgpa2: {
    run: (v) => {
      const p = num(v.pct);
      if (!(p >= 0)) return null;
      return { answer: [p / 9.5, "num"] };
    },
  },

  /* BMI: kg / m^2 — the category string is produced by bmiCategory() */
  bmi: {
    run: (v) => {
      const kg = num(v.weight),
        cm = num(v.height);
      if (!(kg > 0) || !(cm > 0)) return null;
      const bmi = kg / Math.pow(cm / 100, 2);
      return { bmi: [bmi, "num"] };
    },
  },

  /* Discount */
  discount: {
    run: (v) => {
      const p = num(v.price),
        d = num(v.percent);
      if (!(p >= 0) || !(d >= 0) || d > 100) return null;
      const f = p * (1 - d / 100);
      return { final: [f, "inr2"], save: [p - f, "inr2"] };
    },
  },
};

/** The BMI category band — identical thresholds to the original calc.js. */
export function bmiCategory(weight: unknown, height: unknown): string | null {
  const kg = parseFloat(String(weight));
  const cm = parseFloat(String(height));
  if (!(kg > 0) || !(cm > 0)) return null;
  const bmi = kg / Math.pow(cm / 100, 2);
  return bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
}

/** Extract string-kind results (currently only bmi.category). */
export function stringResults(calcName: string, vals: Record<string, number | string>): StringResults {
  if (calcName !== "bmi") return {};
  const cat = bmiCategory(vals.weight, vals.height);
  return cat ? { category: cat } : {};
}

/** Run a named calculator, mirroring calc.js's update() semantics. */
export function runCalc(
  calcName: string,
  vals: Record<string, number | string>
): { numeric: CalcResult | null; strings: StringResults } {
  const def = CALC[calcName];
  if (!def) return { numeric: null, strings: {} };
  let out: CalcResult | null = null;
  try {
    out = def.run(vals);
  } catch {
    out = null;
  }
  const strings = stringResults(calcName, vals);
  return { numeric: out, strings };
}

/** Format one result value for display; "—" when absent (mirrors render()). */
export function displayValue(
  numeric: CalcResult | null,
  strings: StringResults,
  key: string
): string {
  if (strings[key] !== undefined) return strings[key];
  if (numeric && numeric[key]) {
    const [val, kind] = numeric[key];
    if (kind === "txt") return strings[key] ?? "—";
    return formatValue(val, kind);
  }
  return "—";
}

/** Numeric value for animated counters (null when unavailable). */
export function numericValue(numeric: CalcResult | null, key: string): number | null {
  if (!numeric || !numeric[key]) return null;
  const [val, kind] = numeric[key];
  if (kind === "txt") return null;
  return Number.isFinite(val) ? val : null;
}
