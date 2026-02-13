import SiteShell from "@/components/site/SiteShell";

const faqs = [
  {
    question: "What is your vetting process for influencers?",
    answer:
      "We perform engagement audits, authenticity checks, manual content reviews, and compliance verification.",
  },
  {
    question: "How is ROI measured?",
    answer:
      "We track reach, engagement, conversions, and attributed sales with campaign-level reporting.",
  },
  {
    question: "What is included in the management fee?",
    answer:
      "Strategy, creator sourcing, negotiation, approvals, monitoring, and reporting.",
  },
  {
    question: "How quickly can campaigns launch?",
    answer:
      "Most campaigns launch within 24-48 hours after brief approval.",
  },
  {
    question: "Do you work globally?",
    answer:
      "Yes. We run campaigns across India and support global activations by request.",
  },
  {
    question: "What about refunds or disputes?",
    answer:
      "We follow clear cancellation terms and resolve disputes with creator contracts and delivery logs.",
  },
];

export default function FaqPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[960px] px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            FAQ
          </p>
          <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">
            Answers to the most common questions
          </h1>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <div className="text-sm font-semibold text-[var(--color-text)]">{faq.question}</div>
                <div className="mt-2 text-sm text-[var(--color-text-muted)]">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
