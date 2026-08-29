import { Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-20">
      <div className="container-edit text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-line-strong text-accent-bright">
          <Compass className="size-7" aria-hidden="true" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent-bright">
          404
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold text-paper sm:text-4xl">
          This story hasn&apos;t been told yet.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved. Let&apos;s get you back to the good stuff.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to Home</Button>
          <Button href="/episodes" variant="outline">
            Browse Episodes
          </Button>
        </div>
      </div>
    </section>
  );
}
