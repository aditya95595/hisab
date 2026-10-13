/* Lucide-style stroke icons, hand-drawn inline SVGs.
   24×24 grid, 2px stroke, round caps — no emoji anywhere. */
import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps, children: React.ReactNode) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const RupeeIcon = (p: IconProps) =>
  base(p, <>
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="M6 13l8.5 8" />
    <path d="M6 13h3" />
    <path d="M9 13c6.667 0 6.667-10 0-10" />
  </>);

export const TrendIcon = (p: IconProps) =>
  base(p, <>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M14 7h7v7" />
  </>);

export const VaultIcon = (p: IconProps) =>
  base(p, <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 8.8V7M12 17v-1.8M8.8 12H7M17 12h-1.8" />
  </>);

export const LayersIcon = (p: IconProps) =>
  base(p, <>
    <path d="M12 2l9 5-9 5-9-5 9-5z" />
    <path d="M3 12l9 5 9-5" />
    <path d="M3 17l9 5 9-5" />
  </>);

export const SparkIcon = (p: IconProps) =>
  base(p, <>
    <path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2L12 3z" />
    <path d="M19 15l.9 2.6 2.6.9-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9L19 15z" />
  </>);

export const PercentIcon = (p: IconProps) =>
  base(p, <>
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </>);

export const ClockIcon = (p: IconProps) =>
  base(p, <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </>);

export const GradeIcon = (p: IconProps) =>
  base(p, <>
    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
  </>);

export const GaugeIcon = (p: IconProps) =>
  base(p, <>
    <path d="M12 15l4-6" />
    <path d="M3.5 15a9 9 0 1 1 17 0" />
    <path d="M12 15h.01" />
  </>);

export const TagIcon = (p: IconProps) =>
  base(p, <>
    <path d="M20.6 13.4L11 3.8A2 2 0 0 0 9.6 3.2H4a1 1 0 0 0-1 1v5.6c0 .5.2 1 .6 1.4l9.6 9.6a2 2 0 0 0 2.8 0l4.6-4.6a2 2 0 0 0 0-2.8z" />
    <circle cx="7.5" cy="7.5" r="1.2" />
  </>);

export const SunIcon = (p: IconProps) =>
  base(p, <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </>);

export const MoonIcon = (p: IconProps) =>
  base(p, <>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </>);

export const ArrowRightIcon = (p: IconProps) =>
  base(p, <>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </>);

export const InfoIcon = (p: IconProps) =>
  base(p, <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </>);

export const ShieldIcon = (p: IconProps) =>
  base(p, <>
    <path d="M12 2l8 3.5v5.2c0 5-3.4 8.6-8 10.3-4.6-1.7-8-5.3-8-10.3V5.5L12 2z" />
    <path d="M9 12l2 2 4-4" />
  </>);

export const ZapIcon = (p: IconProps) =>
  base(p, <>
    <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />
  </>);

export const CalcIcon = (p: IconProps) =>
  base(p, <>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M8 6h8" />
    <path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" />
  </>);

export const CheckIcon = (p: IconProps) =>
  base(p, <>
    <path d="M20 6L9 17l-5-5" />
  </>);

export const TOOL_ICONS: Record<string, (p: IconProps) => React.ReactNode> = {
  rupee: RupeeIcon,
  trend: TrendIcon,
  vault: VaultIcon,
  layers: LayersIcon,
  spark: SparkIcon,
  percent: PercentIcon,
  clock: ClockIcon,
  grade: GradeIcon,
  gauge: GaugeIcon,
  tag: TagIcon,
};
