export default function AboutSection() {
  return (
    <section id="about" className="bg-[var(--hero-bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              About
            </p>
            <h2 className="mt-4 text-[28px] font-semibold text-[var(--color-text)] md:text-[34px]">
              About Flerid Influence
            </h2>
            <p className="mt-4 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              A branch of Flerid Technologies based in Assam, India. Our mission: “Bridging authentic
              influencers and quality brands for meaningful partnerships.”
            </p>
            <p className="mt-4 text-[15px] text-[var(--color-text-muted)] md:text-[16px]">
              Founded on the principle that authentic influence creates lasting impact, we personally
              curate every partnership to ensure brand safety, audience alignment, and measurable ROI.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { name: "IMA Certified", detail: "Influencer Marketing Association" },
                { name: "ASCI Compliant", detail: "Advertising Standards Council" },
                { name: "ISO 27001", detail: "Information Security Management" },
                { name: "GDPR Compliant", detail: "Data Protection Regulation" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="glass-card shadow-card rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5"
                >
                  <div className="text-sm font-semibold text-[var(--color-text)]">{item.name}</div>
                  <div className="mt-1 text-xs text-[var(--color-text-subtle)]">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card shadow-card rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8">
            <h3 className="text-[20px] font-semibold text-[var(--color-text)] md:text-[22px]">Our Journey</h3>
            <div className="mt-6 space-y-6">
              {[
                {
                  year: "2023",
                  title: "Flerid Technologies Founded",
                  detail: "Established as a technology company in Assam, India.",
                },
                {
                  year: "2024",
                  title: "Market Research & Development",
                  detail: "Extensive research into influencer marketing challenges and solutions.",
                },
                {
                  year: "2025",
                  title: "Flerid Influence Launch",
                  detail: "Launched premium influencer marketing platform with manual curation.",
                },
              ].map((item) => (
                <div key={item.year} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] text-sm font-semibold">
                    {item.year}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-text)]">{item.title}</div>
                    <div className="text-xs text-[var(--color-text-subtle)]">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
