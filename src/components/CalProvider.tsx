"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async function () {
      // Initialize main discovery call calendar
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

      // Initialize acquisitions calendar
      const calAcquisitions = await getCalApi({ namespace: "acquisitions-discovery-call" });
      calAcquisitions("ui", {
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

  return <>{children}</>;
}
