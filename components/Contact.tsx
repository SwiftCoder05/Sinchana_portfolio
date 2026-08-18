import { site } from "@/content/site";

export function Contact() {
  return (
    <section className="section wrap" id="contact">
      <div className="section-head">
        <p className="kicker">Contact</p>
        <p className="index">05 / Talk</p>
      </div>
      <div className="contact">
        <div>
          <h2>Have a problem worth building?</h2>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Let&apos;s talk.
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
