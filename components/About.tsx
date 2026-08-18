import { education, site } from "@/content/site";

export function About() {
  return (
    <section className="section wrap" id="about">
      <div className="section-head">
        <p className="kicker">A little about me</p>
        <p className="index">02 / About</p>
      </div>
      <div className="about-grid">
        <div>
          <h2>Building systems that actually work.</h2>
        </div>
        <div>
          <div className="about-copy">
            <p>
              I spend most of my time on the unglamorous parts of software:
              backend services, APIs, retrieval pipelines, and the cloud
              wiring that keeps them from falling over.
            </p>
            <p>
              At {site.currently} I write Python services and REST/FastAPI
              endpoints, then sit with the team through sprints, standups, and
              reviews until the thing is actually shippable.
            </p>
            <p>
              Side projects tend to sit in the same overlap — voice sessions,
              document Q&amp;A, embeddings — because that is where interface
              design and systems work have to agree.
            </p>
          </div>
          <div className="facts">
            <div className="fact">
              <b>{site.location}</b>
              <span>Based</span>
            </div>
            <div className="fact">
              <b>{site.role}</b>
              <span>Currently</span>
            </div>
            <div className="fact">
              <b>Computer Science</b>
              <span>{education.school}</span>
            </div>
            <div className="fact">
              <b>{education.detail}</b>
              <span>{education.dates}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
