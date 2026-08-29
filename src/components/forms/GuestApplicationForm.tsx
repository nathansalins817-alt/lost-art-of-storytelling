"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-line-strong bg-surface px-4 py-3 text-sm text-paper placeholder:text-faint focus-visible:border-accent-bright";
const labelClasses = "mb-2 block text-sm font-medium text-paper";

export function GuestApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    try {
      // TODO: wire to a form backend (Formspree, Airtable, a Next.js API route, etc.)
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex items-start gap-3 rounded-2xl border border-accent-bright/40 bg-accent/10 p-8 text-paper"
        role="status"
      >
        <CheckCircle2 className="mt-0.5 size-7 shrink-0 text-accent-bright" />
        <div>
          <p className="text-lg font-semibold">Application received.</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Thanks for sharing your story. Nathan personally reviews every
            application — if it looks like a fit, someone from the show will
            follow up by email.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="guest-name">
            Name
          </label>
          <input id="guest-name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="guest-email">
            Email
          </label>
          <input id="guest-email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="guest-organization">
            Organization / Company
          </label>
          <input id="guest-organization" name="organization" type="text" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="guest-website">
            Website / Social Media
          </label>
          <input
            id="guest-website"
            name="website"
            type="text"
            placeholder="https://"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="guest-what-you-do">
          What do you do?
        </label>
        <textarea id="guest-what-you-do" name="whatYouDo" required rows={3} className={inputClasses} />
      </div>

      <div>
        <label className={labelClasses} htmlFor="guest-story">
          What is your story?
        </label>
        <textarea
          id="guest-story"
          name="story"
          required
          rows={5}
          className={inputClasses}
          placeholder="Give us the short version — we'll dig into the details on the call."
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="guest-why">
          Why would you be a good guest?
        </label>
        <textarea id="guest-why" name="whyGoodGuest" required rows={4} className={inputClasses} />
      </div>

      <div>
        <label className={labelClasses} htmlFor="guest-topics">
          Suggested interview topics
        </label>
        <textarea
          id="guest-topics"
          name="suggestedTopics"
          rows={3}
          className={inputClasses}
          placeholder="A few threads you'd want to pull on during the conversation."
        />
      </div>

      {status === "error" ? (
        <div
          className="flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-paper"
          role="alert"
        >
          <AlertCircle className="size-4 shrink-0 text-red-400" />
          Something went wrong submitting your application. Please try again.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-white transition-colors hover:bg-accent-bright disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? <Loader2 className="size-4 animate-spin" /> : null}
        Submit Application
      </button>
    </form>
  );
}
