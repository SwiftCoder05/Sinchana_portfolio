import Link from "next/link";
import type { projects } from "@/content/site";
import { DocuChatVisual, Mock2WinVisual } from "./ProjectVisuals";

type Project = (typeof projects)[keyof typeof projects];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <div className="project-copy">
        <p className="index">{project.index} / {project.year}</p>
        <h3>
          <Link href={`/work/${project.slug}`}>
            {project.name}
          </Link>
        </h3>
        <p className="kind">{project.kind}</p>
        <p className="project-blurb">{project.blurb}</p>
        <div className="chips">
          {project.stack.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="hero-actions" style={{ marginTop: "1.3rem" }}>
          <Link className="btn btn-primary" href={`/work/${project.slug}`}>
            Case study
          </Link>
          <a
            className="btn btn-ghost"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <Link
        href={`/work/${project.slug}`}
        aria-label={`${project.name} case study`}
      >
        {project.slug === "mock2win" ? <Mock2WinVisual /> : <DocuChatVisual />}
      </Link>
    </article>
  );
}
