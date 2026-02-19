"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
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
    <Cal
      namespace="good-company-discovery-call"
      calLink="alex-tribe-pzou91/good-company-discovery-call"
      style={{ width: "100%", height: "700px", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
