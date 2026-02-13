"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const isReducedMotion = prefersReducedMotion ?? false;

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 40, density: { enable: true, area: 800 } },
        size: { value: { min: 0.6, max: 2 } },
        move: { speed: 0.4 },
        color: { value: ["#1E63FF", "#00C49A", "#FF4D8D"] },
        opacity: { value: 0.18 },
        links: { enable: false },
      },
    }),
    []
  );

  return (
    <section className="relative overflow-hidden bg-[var(--hero-bg)] text-[var(--hero-text)]">
      <div className="absolute inset-0">
        {!isReducedMotion && (
          <Particles
            id="hero-particles"
            init={particlesInit}
            options={particlesOptions}
            className="absolute inset-0"
          />
        )}
        <div className="absolute inset-0 bg-[var(--hero-radial-1)]" />
        <div className="absolute inset-0 bg-[var(--hero-radial-2)]" />
      </div>

      <div className="relative mx-auto grid min-h-[70vh] max-w-[1320px] grid-cols-1 gap-10 px-6 pb-16 pt-6 sm:pb-20 lg:min-h-[76vh] lg:grid-cols-12 lg:gap-6 lg:pb-24 lg:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isReducedMotion ? 0 : 0.8 }}
          className="lg:col-span-6"
        >
          <div className="max-w-[540px]">
            <span className="mb-6 inline-flex items-center rounded-full bg-[var(--hero-pill-bg)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--hero-text-muted)]">
              Introducing
            </span>
            <h1 className="text-balanced text-[36px] font-semibold leading-[1.1] text-[var(--hero-text)] md:text-[52px] md:leading-[1.06] xl:text-[64px] xl:leading-[1.02]">
              the Flerid Influence Platform
            </h1>
            <p className="mt-6 text-[22px] font-medium text-[var(--hero-text)] md:text-[28px]">
              Get Your Brand Connected
            </p>
            <p className="mt-4 text-[15px] text-[var(--hero-text-muted)] md:text-[16px] lg:text-[18px]">
              The new purpose-built platform to harness authentic influence
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-on-primary)] shadow-cta transition hover:scale-[1.02] hover:bg-[var(--color-primary-strong)]"
              >
                Explore Features
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--hero-text-muted)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--hero-text)] transition hover:border-[var(--hero-text)]"
              >
                Get Started
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: "11x ROI", detail: "Average Return on Investment", key: "roi" },
                { label: "0% Fake Followers", detail: "Manual verification", key: "authenticity" },
                { label: "24hrs Launch", detail: "Campaign launch time", key: "speed" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="group glass-card shadow-card rounded-2xl border border-[var(--glass-border)] px-4 py-4 transition hover:-translate-y-1"
                >
                  <div className="text-lg font-semibold text-[var(--hero-text-muted)] transition group-hover:text-[var(--hero-text)]">
                    {kpi.label}
                  </div>
                  <div className="text-xs text-[var(--hero-text-muted)]">{kpi.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-6">
          <div className="relative h-[320px] overflow-hidden rounded-[28px] border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-card sm:h-[380px] lg:h-[520px]">
            <video
              className="h-full w-full object-cover brightness-70"
              src="https://kcqxikchnrwwrxrrwfqq.supabase.co/storage/v1/object/public/hero%20video/influencer%20marketing.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
