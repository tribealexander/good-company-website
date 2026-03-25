import { notFound } from "next/navigation";
import {
  getPresentationBySlug,
  getAllPresentationSlugs,
} from "@/lib/presentations";
import PresentationContent from "./PresentationContent";

export async function generateStaticParams() {
  return getAllPresentationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const presentation = getPresentationBySlug(slug);
  if (!presentation) return {};

  return {
    title: `${presentation.title} | Good Company`,
    description: presentation.subtitle,
    robots: { index: false, follow: false },
  };
}

export default async function PresentationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const presentation = getPresentationBySlug(slug);

  if (!presentation) {
    notFound();
  }

  return <PresentationContent presentation={presentation} />;
}
