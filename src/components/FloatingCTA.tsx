"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show after scrolling 50vh
      const shouldShow = scrollPosition > viewportHeight * 0.5;

      // Hide when near the bottom (contact form section)
      const nearBottom = scrollPosition + viewportHeight > documentHeight - 400;

      setVisible(shouldShow && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 md:bottom-6 md:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {/* Desktop floating button with pennant */}
      <a
        href="https://calendar.app.google/gi1oCV2S8mcjTqRx7"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-press hidden items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(0,103,71,0.2)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-[0_6px_24px_rgba(0,103,71,0.25)] md:inline-flex"
      >
        <Image
          src="/images/logos/pennant.png"
          alt=""
          width={20}
          height={20}
          className="h-5 w-auto brightness-0 invert"
        />
        Book a Brainstorm
      </a>

      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 border-t border-border bg-white p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
        <a
          href="https://calendar.app.google/gi1oCV2S8mcjTqRx7"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-center text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(0,103,71,0.2)] transition-all duration-200 ease-out"
        >
          <Image
            src="/images/logos/pennant.png"
            alt=""
            width={18}
            height={18}
            className="h-[18px] w-auto brightness-0 invert"
          />
          Book a Brainstorm
        </a>
      </div>
    </div>
  );
}
