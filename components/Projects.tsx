import { projectList } from "@/content/site";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section className="section wrap" id="work">
      <div className="section-head">
        <p className="kicker">Selected work</p>
        <p className="index">01 / Projects</p>
      </div>
      {projectList.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}
