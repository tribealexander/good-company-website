"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: {
      (action: string, ...args: unknown[]): void;
      ns?: Record<string, unknown>;
      loaded?: boolean;
      q?: unknown[];
    };
  }
}

export default function CalEmbed() {
  useEffect(() => {
    // Load Cal.com embed script
    (function (C, A, L) {
      const p = function (a: unknown, ar: unknown) {
        (a as { q?: unknown[] }).q = (a as { q?: unknown[] }).q || [];
        (a as { q: unknown[] }).q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: unknown[]) {
          const cal = C.Cal;
          const ar = args;
          if (!cal?.loaded) {
            cal!.ns = {};
            cal!.q = cal!.q || [];
            const script = d.createElement("script");
            script.src = A;
            script.async = true;
            d.head.appendChild(script);
            cal!.loaded = true;
          }
          if (ar[0] === L) {
            const api = function (...apiArgs: unknown[]) {
              p(api, apiArgs);
            };
            const namespace = ar[1] as string;
            (api as unknown as { q?: unknown[] }).q = (api as unknown as { q?: unknown[] }).q || [];
            if (typeof namespace === "string") {
              cal!.ns![namespace] = cal!.ns![namespace] || api;
              p(cal!.ns![namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal.com with styling
    window.Cal?.("init", { origin: "https://cal.com" });

    window.Cal?.("ui", {
      theme: "light",
      styles: {
        branding: {
          brandColor: "#006747",
        },
      },
      hideEventTypeDetails: false,
    });
  }, []);

  return (
    <div
      id="cal-embed"
      data-cal-link="alex-tribe-pzou91/good-company-discovery-call"
      data-cal-config='{"layout":"month_view"}'
      style={{ width: "100%", height: "100%", minHeight: "600px" }}
    />
  );
}
