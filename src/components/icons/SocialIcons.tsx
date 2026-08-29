import type { SVGProps } from "react";

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21.6 7.2c-.2-1.1-1.1-2-2.2-2.2C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.4.4c-1.1.2-2 1.1-2.2 2.2C2 9 2 12 2 12s0 3 .4 4.8c.2 1.1 1.1 2 2.2 2.2 1.8.4 7.4.4 7.4.4s5.6 0 7.4-.4c1.1-.2 2-1.1 2.2-2.2.4-1.8.4-4.8.4-4.8s0-3-.4-4.8Z" />
      <path d="M10 9.6 15 12l-5 2.4V9.6Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15.5 3v10.9a3.6 3.6 0 1 1-3.1-3.57" />
      <path d="M15.5 3c.5 2.6 2.2 4.2 4.9 4.4" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-6" />
      <path d="M11.5 13c0-1.4 1-2.5 2.4-2.5 1.4 0 2.1 1 2.1 2.6v3.4" />
    </svg>
  );
}
