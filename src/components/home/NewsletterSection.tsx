import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-deep-blue-soft/40 blur-[150px]" />
      </div>

      <div className="container-edit">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-paper sm:text-4xl">
            Don&apos;t Miss the Next Story
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Get new interviews, stories and videos delivered straight to your
            inbox.
          </p>
          <NewsletterForm className="mx-auto mt-8 max-w-lg" />
          <p className="mt-4 text-xs text-faint">
            No spam. Unsubscribe anytime.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
