import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referrals - Good Company",
  description:
    "Know someone who could use my help? Earn 10% of everything they pay me—every invoice, for as long as they're a client.",
};

export default function ReferralsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
