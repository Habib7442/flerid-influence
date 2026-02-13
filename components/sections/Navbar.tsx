"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/site/ThemeContext";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navItems: NavItem[];
};

export default function Navbar({ navItems }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let frame: number | null = null;

    const updateNavHeight = () => {
      const height = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--nav-height", `${height}px`);
    };

    const scheduleUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        updateNavHeight();
      });
    };

    updateNavHeight();

    const resizeObserver = new ResizeObserver(() => scheduleUpdate());
    resizeObserver.observe(header);

    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all ${
          isScrolled
            ? "bg-[var(--color-nav-bg)] border-b border-[var(--color-nav-border)] shadow-[var(--color-nav-shadow)]"
            : "bg-[var(--color-nav-bg)]"
        }`}
      >
        <div className="mx-auto flex min-h-16 max-w-[1320px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E63FF] via-[#5AA7FF] to-[#00C49A]">
              <div className="h-4 w-4 rounded-full bg-white/90" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-nav-muted)]">
                Flerid
              </span>
              <span className="text-lg font-semibold text-[var(--color-nav-text)]">Influence</span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-[0.24em] text-[var(--color-nav-muted)] transition hover:text-[var(--color-nav-text)]"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => theme?.toggle()}
              aria-label="Toggle theme"
              className="rounded-full border border-[var(--color-nav-border)] p-2 text-[var(--color-nav-text)] transition hover:bg-[var(--color-nav-hover)]"
            >
              {theme?.theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              href="/contact"
              className="rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-on-primary)] shadow-cta transition hover:scale-[1.02] hover:bg-[var(--color-primary-strong)]"
            >
              Get Started
            </Link>
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => theme?.toggle()}
              aria-label="Toggle theme"
              className="rounded-full border border-[var(--color-nav-border)] p-2 text-[var(--color-nav-text)] transition hover:bg-[var(--color-nav-hover)]"
            >
              {theme?.theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              className="rounded-full border border-[var(--color-nav-border)] p-2 text-[var(--color-nav-text)]"
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-[var(--color-nav-border)] bg-[var(--color-nav-bg)] md:hidden"
            >
              <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-6 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-semibold text-[var(--color-nav-muted)]"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-between rounded-full bg-[var(--color-primary)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-on-primary)] shadow-cta"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
