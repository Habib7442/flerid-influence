"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Flerid Influence delivered 25% sales growth in just 3 months. Their manual verification process ensured every influencer was authentic and aligned with our brand values.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "Beauty Brand Co.",
    result: "25% Sales Growth",
  },
  {
    quote:
      "The ROI was incredible - 11x return on our investment. The team's personal approach to campaign management made all the difference.",
    author: "Raj Patel",
    role: "Founder",
    company: "Tech Startup",
    result: "11x ROI",
  },
  {
    quote:
      "Finally, an influencer platform that prioritizes authenticity. Zero fake followers, real engagement, and measurable results.",
    author: "Emily Rodriguez",
    role: "Brand Manager",
    company: "Fashion Forward",
    result: "200% Engagement Boost",
  },
];

export default function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();
  const isReducedMotion = prefersReducedMotion ?? false;
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[var(--hero-bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Testimonials
          </p>
          <h2 className="mt-4 text-[28px] font-semibold md:text-[34px]">
            What our clients say
          </h2>
        </div>
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: isReducedMotion ? 0 : 0.5 }}
              className="glass-card shadow-card mx-auto max-w-3xl rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 text-center"
            >
              <p className="text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
                “{testimonials[activeTestimonial].quote}”
              </p>
              <div className="mt-6 text-sm font-semibold text-[var(--color-text)]">
                {testimonials[activeTestimonial].author}
              </div>
              <div className="text-xs text-[var(--color-text-subtle)]">
                {testimonials[activeTestimonial].role} · {testimonials[activeTestimonial].company}
              </div>
              <div className="mt-4 text-sm font-semibold text-[var(--color-primary)]">
                {testimonials[activeTestimonial].result}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-2 w-2 rounded-full ${
                  activeTestimonial === index ? "bg-[var(--color-primary)]" : "bg-[var(--color-primary)]/30"
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
