import { site } from "@/content/site";

export function Contact() {
  return (
    <section className="section wrap" id="contact">
      <div className="section-head">
        <p className="kicker">Contact</p>
      </div>
      <div className="contact">
        <div>
          <h2>Get in touch</h2>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Open to work and collaborations.
          </p>
        </div>
        <div>
          <p className="kicker">{site.location}</p>
          <div className="contact-links">
            <a href={`mailto:${site.email}`}>
              Email <span>{site.email}</span>
              <i>→</i>
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span>sinchanas05</span>
              <i>→</i>
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub <span>SwiftCoder05</span>
              <i>→</i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
