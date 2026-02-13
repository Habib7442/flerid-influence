"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { supabase } from "@/lib/supabase";

type LeadFormModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LeadFormModal({ open, onClose }: LeadFormModalProps) {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setFormStatus("idle");
      setFormErrors({});
      setSubmitError(null);
    }
  }, [open]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const errors: Record<string, string> = {};
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const brand = String(formData.get("brand") || "").trim();
    const brief = String(formData.get("brief") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    if (!name) errors.name = "Name is required.";
    if (!email || !email.includes("@")) errors.email = "Valid email is required.";
    if (!brand) errors.brand = "Brand is required.";
    if (!budget) errors.budget = "Budget range is required.";
    if (!brief) errors.brief = "Brief is required.";
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      setFormStatus("error");
      return;
    }
    if (!supabase) {
      setSubmitError("Form configuration is unavailable. Please try again later.");
      setFormStatus("error");
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const { error } = await supabase.from("contact_requests").insert({
        name,
        email,
        brand,
        budget,
        brief,
        source: "modal",
      });
      if (error) {
        console.error("Supabase insert error (modal):", error);
        const message =
          [error.message, error.details, error.hint].filter(Boolean).join(" ") ||
          JSON.stringify(error);
        setSubmitError(message || "We could not submit your brief. Please try again.");
        setFormStatus("error");
        return;
      }
      setFormStatus("success");
      if (formElement instanceof HTMLFormElement) {
        formElement.reset();
      }
    } catch (err) {
      console.error("Supabase insert error (modal):", err);
      setSubmitError("We could not submit your brief. Please try again.");
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-xl max-h-[80vh] overflow-y-auto rounded-3xl bg-[var(--color-surface)] p-6 text-[var(--color-text)] sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Get started form"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[22px] font-semibold text-[var(--color-text)]">Get Started</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Share your campaign brief and we will respond within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[var(--color-border)] p-2"
                aria-label="Close form"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
                  Name
                </label>
                <input
                  name="name"
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]"
                  placeholder="Your name"
                />
                {formErrors.name && <div className="mt-1 text-xs text-[var(--color-warm)]">{formErrors.name}</div>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]"
                  placeholder="you@brand.com"
                />
                {formErrors.email && <div className="mt-1 text-xs text-[var(--color-warm)]">{formErrors.email}</div>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
                  Brand
                </label>
                <input
                  name="brand"
                  autoComplete="organization"
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]"
                  placeholder="Brand or company"
                />
                {formErrors.brand && <div className="mt-1 text-xs text-[var(--color-warm)]">{formErrors.brand}</div>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
                  Budget Range
                </label>
                <input
                  name="budget"
                  autoComplete="off"
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)]"
                  placeholder="Budget range"
                  required
                />
                {formErrors.budget && <div className="mt-1 text-xs text-[var(--color-warm)]">{formErrors.budget}</div>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
                  Brief
                </label>
                <textarea
                  name="brief"
                  rows={4}
                  autoComplete="off"
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]"
                  placeholder="Tell us about your goals, timeline, and campaign needs."
                />
                {formErrors.brief && <div className="mt-1 text-xs text-[var(--color-warm)]">{formErrors.brief}</div>}
              </div>
              <div className="text-xs text-[var(--color-text-subtle)]">
                This form is protected by reCAPTCHA v3.
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-[var(--color-text-subtle)]" aria-live="polite">
                  {formStatus === "success" && "Thanks! We will be in touch shortly."}
                  {formStatus === "error" && (submitError ?? "Please complete the required fields.")}
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-[var(--color-primary)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-primary)] shadow-cta hover:bg-[var(--color-primary-strong)] disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
