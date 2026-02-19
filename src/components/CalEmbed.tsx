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
          light: { "cal-brand": "#006747" },
          dark: { "cal-brand": "#006747" },
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
      className="w-full rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25"
    >
      Book a Discovery Call
    </button>
  );
}
