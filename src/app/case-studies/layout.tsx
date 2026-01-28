import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Good Company",
  description:
    "Real implementations, real results. See how we've helped businesses automate operations, build visibility, and improve accountability.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
