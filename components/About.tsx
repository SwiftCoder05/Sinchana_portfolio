import { education, site } from "@/content/site";

export function About() {
  return (
    <section className="section wrap" id="about">
      <div className="section-head">
        <p className="kicker">About</p>
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
              At {site.currently} I led the development of CampusIQ, an
              AI-powered campus intelligence assistant using AWS Bedrock and
              Lambda, designing permission-aware event discovery, personalized
              responses, and a scalable retrieval architecture.
            </p>
            <p>
              Side projects tend to sit in the same overlap — voice sessions,
              LangGraph and RAG-driven job-search workflows — because that is
              where interface design and systems work have to agree.
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
