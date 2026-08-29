"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  className?: string;
  compact?: boolean;
}

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm({ className, compact = false }: NewsletterFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      // TODO: connect to Mailchimp / Beehiiv / ConvertKit / Substack.
      // e.g. await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ firstName, email }) })
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      setFirstName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-xl border border-accent-bright/40 bg-accent/10 px-4 py-3.5 text-sm font-medium text-paper",
          className
        )}
        role="status"
      >
        <CheckCircle2 className="size-5 shrink-0 text-accent-bright" />
        You&apos;re in. Check your inbox to confirm.
      </div>
    );
  }

  return (
    <div className={className}>
      {status === "error" ? (
        <div
          className="mb-3 flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-paper"
          role="alert"
        >
          <AlertCircle className="size-4 shrink-0 text-red-400" />
          Something went wrong. Please try again.
        </div>
      ) : null}
      <form
        onSubmit={handleSubmit}
        className={cn("flex flex-col gap-3", !compact && "sm:flex-row")}
        noValidate
      >
        <div className={cn("flex flex-1 gap-3", compact && "flex-col")}>
          <label className="sr-only" htmlFor="newsletter-first-name">
            First name
          </label>
          <input
            id="newsletter-first-name"
            type="text"
            required
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full min-w-0 rounded-full border border-line-strong bg-surface px-4 py-3 text-sm text-paper placeholder:text-faint focus-visible:border-accent-bright"
          />
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full min-w-0 rounded-full border border-line-strong bg-surface px-4 py-3 text-sm text-paper placeholder:text-faint focus-visible:border-accent-bright"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-[46px] shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-bright disabled:opacity-60"
        >
          {status === "submitting" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : null}
          Join the Newsletter
        </button>
      </form>
    </div>
  );
}
