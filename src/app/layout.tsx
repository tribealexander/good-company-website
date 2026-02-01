import type { Metadata } from "next";
import { Inter, Source_Sans_3, JetBrains_Mono, Caveat, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Good Company - Organize. Automate. Scale.",
  description:
    "Boutique operational efficiency and automation consultancy for $1M-$50M businesses. We build systems that remove busywork, create visibility, and enable evidence-based management.",
  keywords: [
    "automation consulting",
    "operational efficiency",
    "process automation",
    "business systems",
    "workflow automation",
  ],
  openGraph: {
    title: "Good Company - Organize. Automate. Scale.",
    description:
      "We build systems that remove busywork, create visibility, and enable evidence-based management.",
    type: "website",
  },
};

// Console easter egg message
const consoleMessage = `
%c👋 Hey, you're poking around. We like that.

Built with care in Toronto, Ontario.
Interested in how this was built? Let's chat.

→ hello@goodcompany.ca
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("${consoleMessage.replace(/\n/g, "\\n")}", "color: #006747; font-size: 14px; font-family: system-ui;");`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${sourceSans.variable} ${jetbrainsMono.variable} ${caveat.variable} ${lora.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
