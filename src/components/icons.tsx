import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </IconBase>
  );
}

export function Check(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 6 9 17l-5-5" />
    </IconBase>
  );
}

export function CheckCircle2(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-5" />
    </IconBase>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m15 18-6-6 6-6" />
    </IconBase>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m9 18 6-6-6-6" />
    </IconBase>
  );
}

export function Download(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </IconBase>
  );
}

export function Facebook(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </IconBase>
  );
}

export function Gift(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 1 1 3.54-3.54L12 5.42l.96-.96A2.5 2.5 0 1 1 16.5 8" />
    </IconBase>
  );
}

export function Home(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </IconBase>
  );
}

export function Instagram(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </IconBase>
  );
}

export function ListOrdered(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M10 6h10" />
      <path d="M10 12h10" />
      <path d="M10 18h10" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </IconBase>
  );
}

export function MapPin(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </IconBase>
  );
}

export function MessageCircle(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-4-.95L3 20l1.1-4.7A8.5 8.5 0 1 1 21 11.5Z" />
    </IconBase>
  );
}

export function Minus(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
    </IconBase>
  );
}

export function Phone(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </IconBase>
  );
}

export function Plus(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </IconBase>
  );
}

export function Send(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </IconBase>
  );
}

export function Share2(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 13.5 6.8 4" />
      <path d="m15.4 6.5-6.8 4" />
    </IconBase>
  );
}

export function ShoppingBag(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 7h12l-1 14H7L6 7Z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </IconBase>
  );
}

export function Star(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m12 2 3.1 6.3 6.9 1-5 4.8 1.2 6.9-6.2-3.3L5.8 21 7 14.1 2 9.3l6.9-1Z" />
    </IconBase>
  );
}

export function Trash2(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </IconBase>
  );
}

export function Video(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M15 10.5 21 7v10l-6-3.5V17H3V7h12Z" />
    </IconBase>
  );
}

export function X(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  );
}

export function ZoomIn(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </IconBase>
  );
}
