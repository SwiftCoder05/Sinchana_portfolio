import Link from "next/link";
import type { projects } from "@/content/site";

type Project = (typeof projects)[keyof typeof projects];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <h3>
        <Link href={`/work/${project.slug}`}>{project.name}</Link>
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
      <div className="hero-actions">
        <Link className="btn btn-primary" href={`/work/${project.slug}`}>
          Read more
        </Link>
        <a className="btn btn-ghost" href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {"live" in project && project.live ? (
          <a className="btn btn-ghost" href={project.live} target="_blank" rel="noreferrer">
            Live demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
