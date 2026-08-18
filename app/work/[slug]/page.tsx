import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects, type ProjectSlug } from "@/content/site";

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];
  if (!project) return { title: "Work" };
  return {
    title: `${project.name} — Sinchana S`,
    description: project.blurb,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
