import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProposalBySlug, getAllProposalSlugs } from "@/lib/proposals";
import ProposalContent from "./ProposalContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProposalSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const proposal = getProposalBySlug(slug);

  if (!proposal) {
    return {
      title: "Proposal Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${proposal.projectTitle} | Proposal`,
    description: `Scope of work proposal for ${proposal.clientName}`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ProposalPage({ params }: Props) {
  const { slug } = await params;
  const proposal = getProposalBySlug(slug);

  if (!proposal) {
    notFound();
  }

  return <ProposalContent proposal={proposal} />;
}
