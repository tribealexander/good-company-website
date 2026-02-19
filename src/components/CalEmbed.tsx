"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "good-company-discovery-call" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#006747",
            "cal-font-family": "Inter, -apple-system, sans-serif",
          },
          dark: {
            "cal-brand": "#006747",
            "cal-font-family": "Inter, -apple-system, sans-serif",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="good-company-discovery-call"
      data-cal-link="alex-tribe-pzou91/good-company-discovery-call"
      data-cal-config='{"layout":"month_view","theme":"light"}'
      className="btn-press inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-[0_4px_20px_rgba(0,103,71,0.25)] transition-all duration-300 hover:bg-primary-light hover:shadow-[0_6px_24px_rgba(0,103,71,0.35)]"
    >
      Book a Discovery Call
    </button>
  );
}
