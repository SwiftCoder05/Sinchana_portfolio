import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Corners } from "./Corners";

export function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">
            <span className="live-dot" />
            Software Engineer · Bengaluru
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
          <div className="meta-row">
            <span>
              <span className="blink" />
              Now · {site.currently}
            </span>
            <span>{site.positioning}</span>
          </div>
        </div>
        <div className="portrait">
          <span className="portrait-orbit" aria-hidden="true" />
          <span className="portrait-orbit portrait-orbit-2" aria-hidden="true" />
          <div className="portrait-oval">
            <Image
              src="/profile.jpg"
              alt="Sinchana S"
              width={575}
              height={1024}
              priority
            />
          </div>
          <Corners />
        </div>
      </div>
    </section>
  );
}
