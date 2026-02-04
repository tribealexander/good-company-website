import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMindMapBySlug, getAllMindMapSlugs } from "@/lib/mindmaps";
import MindMapContent from "./MindMapContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllMindMapSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mindMap = getMindMapBySlug(slug);

  if (!mindMap) {
    return {
      title: "Mind Map Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${mindMap.title} - Mind Map`,
    description: `Case study visualization for ${mindMap.title}`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function MindMapPage({ params }: Props) {
  const { slug } = await params;
  const mindMap = getMindMapBySlug(slug);

  if (!mindMap) {
    notFound();
  }

  return <MindMapContent mindMap={mindMap} />;
}
