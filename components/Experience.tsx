import { experience } from "@/content/site";

export function Experience() {
  const job = experience[0];

  return (
    <section className="section wrap" id="experience">
      <div className="section-head">
        <p className="kicker">Timeline</p>
        <p className="index">03 / Experience</p>
      </div>
      <div className="timeline">
        <p className="timeline-year">{job.dates}</p>
        <article className="exp is-open">
          <div className="exp-top">
            <div>
              <h3>{job.company}</h3>
              <p className="exp-role">
                {job.role} · {job.location}
              </p>
            </div>
          </div>
          <div className="exp-body">
            <div className="exp-body-inner">
              <ul>
                {job.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="chips">
                {job.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
