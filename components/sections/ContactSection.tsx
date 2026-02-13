"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLeadForm } from "@/components/site/LeadFormContext";

const faqs = [
  {
    question: "What is your vetting process for influencers?",
    answer:
      "We conduct engagement audits, authenticity checks, and manual content reviews, supported by tools like HypeAuditor to ensure quality and alignment.",
  },
  {
    question: "How is ROI measured?",
    answer:
      "We track reach, engagement, conversion lift, and sales impact through campaign-level reporting.",
  },
  {
    question: "What is included in the management fee?",
    answer:
      "Strategy, creator sourcing, negotiation, approvals, performance monitoring, and final reporting.",
  },
  {
    question: "Refunds or disputes — how do you handle them?",
    answer:
      "We follow documented cancellation terms and resolve disputes using deliverable logs and signed briefs.",
  },
  {
    question: "What is the timeline to launch?",
    answer:
      "Most campaigns launch within 24-48 hours after brief approval and creator confirmation.",
  },
  {
    question: "Do you work globally?",
    answer:
      "Yes. We run campaigns across India and support global activations on request.",
  },
];

export default function ContactSection() {
  const leadForm = useLeadForm();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="contact" className="bg-[var(--hero-bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="glass-card shadow-card flex flex-col items-start justify-between gap-6 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 sm:p-8 lg:flex-row lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Contact
            </p>
            <h2 className="mt-4 text-[28px] font-semibold text-[var(--color-text)] md:text-[34px]">
              Start Your Campaign Today
            </h2>
            <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              Email Us info@flerid.com · Call Us +91 6003351943
            </p>
          </div>
          <button
            type="button"
            onClick={() => leadForm?.open()}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-on-primary)] shadow-cta transition hover:scale-[1.02] hover:bg-[var(--color-primary-strong)]"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Quick brief
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <input
                autoComplete="name"
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]"
                placeholder="Name"
              />
              <input
                autoComplete="email"
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)]"
                placeholder="Email"
                type="email"
              />
              <input
                autoComplete="organization"
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] md:col-span-2"
                placeholder="Campaign objective"
              />
            </div>
            <button
              type="button"
              onClick={() => leadForm?.open()}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-primary)] shadow-cta hover:bg-[var(--color-primary-strong)]"
            >
              Continue to full brief
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-text-muted)]">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Response time
            </div>
            <p className="mt-3">
              We review every request within 24 hours and share a shortlist of verified creators.
            </p>
            <div className="mt-4 space-y-2">
              <div>Strategy call scheduling</div>
              <div>Creator verification summary</div>
              <div>Campaign timeline proposal</div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-center text-[22px] font-semibold text-[var(--color-text)] md:text-[24px]">
            Frequently Asked Questions
          </h3>
          <div className="mx-auto mt-6 max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="glass-card shadow-card rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-[var(--color-text)]"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <span className="text-[var(--color-primary)]">{openFaq === index ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden px-6 pb-4 text-sm text-[var(--color-text-muted)]"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
