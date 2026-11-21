import Link from "next/link";
import type { projects } from "@/content/site";

type Project = (typeof projects)[keyof typeof projects];

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="case wrap">
      <p className="kicker" style={{ marginBottom: "1.2rem" }}>
        <Link href="/#work">← Work</Link>
        <span style={{ margin: "0 0.6rem", color: "var(--mute)" }}>/</span>
        {project.index} · {project.year}
      </p>
      <div className="case-hero">
        <div>
          <h1>{project.name}</h1>
          <p className="kind" style={{ marginTop: "0.8rem" }}>
            {project.kind}
          </p>
        </div>
      </div>
      <div className="blocks">
        <section className="block">
          <p className="kicker">Problem</p>
          <p>{project.problem}</p>
        </section>
        <section className="block">
          <p className="kicker">What I built</p>
          <p>{project.built}</p>
        </section>
        <section className="block">
          <p className="kicker">Architecture</p>
          <div>
            <p>{project.architecture}</p>
            <ul style={{ margin: "1rem 0 0", paddingLeft: "1.1rem", color: "var(--ink-2)" }}>
              {project.notes.map((note) => (
                <li key={note} style={{ marginBottom: "0.35rem" }}>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="block">
          <p className="kicker">Technologies</p>
          <div className="chips">
            {project.stack.map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </section>
        <section className="block">
          <p className="kicker">Source</p>
          <a className="btn btn-primary" href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {"live" in project && project.live ? (
            <a
              className="btn"
              style={{ marginLeft: "0.8rem" }}
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          ) : null}
        </section>
      </div>
    </article>
  );
}
