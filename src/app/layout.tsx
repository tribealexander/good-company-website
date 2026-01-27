import type { Metadata } from "next";
import { Inter, Source_Sans_3, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Good Company - Automate. Organize. Build Accountability.",
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
    title: "Good Company - Automate. Organize. Build Accountability.",
    description:
      "We build systems that remove busywork, create visibility, and enable evidence-based management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${sourceSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
