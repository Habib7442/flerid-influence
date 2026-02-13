"use client";

import { useState, type FormEvent } from "react";
import SiteShell from "@/components/site/SiteShell";
import { ArrowUpRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const brand = String(formData.get("brand") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const objectives = String(formData.get("objectives") || "").trim();

    if (!name || !email || !brand || !budget || !objectives) {
      setSubmitError("Please fill in all required fields.");
      setSubmitSuccess(null);
      return;
    }
    if (!supabase) {
      setSubmitError("Form configuration is unavailable. Please try again later.");
      setSubmitSuccess(null);
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);
    try {
      const { error } = await supabase.from("contact_requests").insert({
        name,
        email,
        brand,
        budget,
        brief: objectives,
        source: "contact_page",
      });
      if (error) {
        console.error("Supabase insert error (contact page):", error);
        const message =
          [error.message, error.details, error.hint].filter(Boolean).join(" ") ||
          JSON.stringify(error);
        setSubmitError(message || "We could not submit your brief. Please try again.");
        return;
      }
      setSubmitSuccess("Thanks! We will be in touch shortly.");
      formElement.reset();
    } catch (err) {
      console.error("Supabase insert error (contact page):", err);
      setSubmitError("We could not submit your brief. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Contact
            </p>
            <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">
              Start a campaign with verified creators
            </h1>
            <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              Share your brief and we will respond within 24 hours.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <form
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="name"
                  autoComplete="name"
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]"
                  placeholder="Name"
                  required
                />
                <input
                  name="email"
                  autoComplete="email"
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]"
                  placeholder="Email"
                  type="email"
                  required
                />
                <input
                  name="brand"
                  autoComplete="organization"
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]"
                  placeholder="Brand"
                  required
                />
                <input
                  name="budget"
                  autoComplete="off"
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]"
                  placeholder="Budget range"
                  required
                />
              </div>
              <textarea
                name="objectives"
                autoComplete="off"
                className="mt-4 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]"
                rows={5}
                placeholder="Campaign objectives and timelines"
                required
              />
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--color-text-subtle)]">
                <span>{submitError ?? submitSuccess ?? ""}</span>
                <button
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-primary)] shadow-cta hover:bg-[var(--color-primary-strong)] disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit brief"}
                <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-text-muted)]">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Contact details
              </div>
              <div className="mt-4 space-y-2">
                <div>Email: info@flerid.com</div>
                <div>Phone: +91 6003351943</div>
                <div>Office: Bilpar Road, Silchar, Assam, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
