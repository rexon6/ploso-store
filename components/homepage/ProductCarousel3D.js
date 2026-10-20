"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Single-product 3D showcase carousel.
 * 
 * Displays ONE product image at a time.
 * Sequence: Hitam → Hijau → Cream → Biru → loop.
 * 
 * Transition approach:
 *   - Both outgoing & incoming images render simultaneously during crossfade
 *   - Outgoing image gets exit-3d animation (rotates away, fades out)
 *   - Incoming image gets enter-3d animation (rotates in, fades in)
 *   - The exit starts slightly before the enter to create a smooth handoff
 *   - After transition completes, only the active image remains with floating animation
 * 
 * No grid, cards, prices, names, or labels.
 */
const showcaseItems = [
  {
    id: "hitam",
    image: "/images/products/kemeja-sanghai-hitam.webp",
    alt: "Kemeja Sanghai Ploso Hitam",
  },
  {
    id: "hijau",
    image: "/images/products/kemeja-sanghai-hijau.webp",
    alt: "Kemeja Sanghai Ploso Hijau",
  },
  {
    id: "cream",
    image: "/images/products/kemeja-sanghai-cream.webp",
    alt: "Kemeja Sanghai Ploso Cream",
  },
  {
    id: "biru",
    image: "/images/products/kemeja-sanghai-biru.webp",
    alt: "Kemeja Sanghai Ploso Biru",
  },
];

const DISPLAY_MS = 3200;      // how long each shirt is shown (idle)
const TRANSITION_MS = 850;    // enter/exit animation duration

export default function ProductCarousel3D() {
  // activeIndex = currently displayed shirt
  // phase: "idle" | "transitioning"
  // nextIndex = which shirt is entering (only during transitioning)
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState("idle");
  const [nextIndex, setNextIndex] = useState(null);

  const activeRef = useRef(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  useEffect(() => {
    let displayTimer;
    let transitionTimer;

    if (phase === "idle") {
      // After DISPLAY_MS, start the transition to the next shirt
      displayTimer = setTimeout(() => {
        if (!mountedRef.current) return;
        const next = (activeRef.current + 1) % showcaseItems.length;
        setNextIndex(next);
        setPhase("transitioning");
      }, DISPLAY_MS);
    }

    if (phase === "transitioning") {
      // After TRANSITION_MS, commit the new active index and go idle
      transitionTimer = setTimeout(() => {
        if (!mountedRef.current) return;
        const committed = nextIndex;
        activeRef.current = committed;
        setActiveIndex(committed);
        setNextIndex(null);
        setPhase("idle");
      }, TRANSITION_MS);
    }

    return () => {
      clearTimeout(displayTimer);
      clearTimeout(transitionTimer);
    };
  }, [phase, nextIndex]);

  return (
    <div
      role="region"
      aria-label="Showcase Produk Kemeja Sanghai Ploso"
      className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] aspect-[3/4] flex items-center justify-center select-none"
    >
      {/* Soft ambient shadow beneath shirt */}
      <div
        aria-hidden="true"
        className="absolute -bottom-3 sm:-bottom-5 left-1/2 w-44 sm:w-56 h-4 sm:h-6 rounded-full blur-xl pointer-events-none animate-shadow-breathe"
        style={{ backgroundColor: "rgba(45, 58, 34, 0.12)" }}
      />

      {/* 3D Showcase Stage */}
      <div className="showcase-stage relative w-full h-full">
        {showcaseItems.map((item, index) => {
          const isActive = index === activeIndex;
          const isNext = index === nextIndex && phase === "transitioning";
          const isExiting = isActive && phase === "transitioning";

          // Decide what to render
          let animClass = "";
          let shouldRender = false;
          let zIdx = 0;

          if (isExiting) {
            // Current shirt animating out
            shouldRender = true;
            animClass = "shirt-exit-3d";
            zIdx = 10;
          } else if (isNext) {
            // Next shirt animating in
            shouldRender = true;
            animClass = "shirt-enter-3d";
            zIdx = 20;
          } else if (isActive && phase === "idle") {
            // Active shirt floating
            shouldRender = true;
            animClass = "shirt-floating";
            zIdx = 20;
          }

          if (!shouldRender) return null;

          return (
            <div
              key={item.id}
              className={`absolute inset-0 flex items-center justify-center ${animClass}`}
              style={{ zIndex: zIdx }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority={index < 2}
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 440px"
                className="object-contain select-none"
                style={{
                  filter: "drop-shadow(0 10px 22px rgba(45, 58, 34, 0.10))",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
