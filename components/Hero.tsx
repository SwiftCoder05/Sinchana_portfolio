import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">
            AI Engineer · Bengaluru
          </p>
          <h1>{site.headline}</h1>
          <p className="lede">{site.intro}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="#work">
              View my work <span className="btn-arrow">→</span>
            </Link>
            <a
              className="btn btn-ghost"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <p className="meta-row">
            Currently {site.role} at {site.currently}
          </p>
        </div>
        <div className="portrait">
          <div className="portrait-oval">
            <Image
              src="/profile.jpg"
              alt="Sinchana S"
              width={575}
              height={1024}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
