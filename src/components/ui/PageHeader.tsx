import type { ReactNode } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-line py-16 sm:py-20", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      </div>
      <div className="container-edit">
        <RevealOnScroll className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-4xl font-bold leading-[1.05] text-paper sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
          {children}
        </RevealOnScroll>
      </div>
    </section>
  );
}
