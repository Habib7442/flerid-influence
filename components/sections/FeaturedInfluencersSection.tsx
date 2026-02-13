"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { influencers } from "@/components/data/influencers";

export default function FeaturedInfluencersSection() {
  const prefersReducedMotion = useReducedMotion();
  const isReducedMotion = prefersReducedMotion ?? false;

  return (
    <section id="influencers" className="bg-[var(--hero-bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Featured Influencers
            </p>
            <h2 className="mt-4 text-[28px] font-semibold md:text-[34px]">
              Human-verified creators ready for your next campaign
            </h2>
            <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              Manually screened creators with audience insights, niche focus, and proven engagement.
            </p>
          </div>
          <Link
            href="/influencers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
          >
            Explore the directory
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative mt-10">
          <div className="swiper-hide-scrollbar overflow-hidden">
            <Swiper
              modules={[A11y, Autoplay, Keyboard]}
              className="swiper-linear"
              loop
              loopAdditionalSlides={6}
              speed={8000}
              keyboard={{ enabled: true }}
              slidesPerView="auto"
              allowTouchMove
              simulateTouch
              grabCursor
              touchStartPreventDefault
              touchMoveStopPropagation
              autoplay={
                isReducedMotion
                  ? false
                  : {
                      delay: 0,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                      waitForTransition: true,
                    }
              }
              onInit={(swiper) => {
                if (influencers.length <= 1 || swiper.slides.length <= 1) {
                  console.error("Influencer swiper has insufficient slides", {
                    influencers: influencers.length,
                    slides: swiper.slides.length,
                  });
                }
              }}
              a11y={{
                enabled: true,
                prevSlideMessage: "Previous influencer",
                nextSlideMessage: "Next influencer",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
              }}
              breakpoints={{
                0: { spaceBetween: 16 },
                640: { spaceBetween: 18 },
                768: { spaceBetween: 20 },
                1024: { spaceBetween: 24 },
              }}
            >
              {influencers.map((creator) => (
                <SwiperSlide
                  key={creator.name}
                  className="h-auto !w-[260px] sm:!w-[300px] lg:!w-[340px]"
                >
                  <div className="glass-card shadow-card flex h-[480px] flex-col overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] sm:h-[520px]">
                    <div className="relative h-1/2 w-full">
                      <Image
                        src={creator.image}
                        alt={`${creator.name} photo`}
                        fill
                        sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 260px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
                            {creator.name}
                            <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)]" />
                          </div>
                          <div className="text-xs text-[var(--color-text-subtle)]">{creator.platform}</div>
                        </div>
                      </div>
                      <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-[var(--color-text-muted)]">
                        <div className="rounded-xl border border-[var(--color-border)] px-3 py-2">
                          Followers
                          <div className="text-sm font-semibold text-[var(--color-text)]">{creator.followers}</div>
                        </div>
                        <div className="rounded-xl border border-[var(--color-border)] px-3 py-2">
                          Reach
                          <div className="text-sm font-semibold text-[var(--color-text)]">{creator.reach}</div>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-[var(--color-text-muted)]">
                        Engagement: <span className="font-semibold text-[var(--color-text)]">{creator.engagement}</span>
                      </div>
                      <div className="mt-3 text-xs text-[var(--color-text-subtle)]">
                        Audience from: {creator.audienceFrom}
                      </div>
                      <div className="mt-auto flex items-center justify-start text-xs font-semibold text-[var(--color-primary)]">
                        <Link href="/contact">Invite</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
