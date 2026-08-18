"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["work", "about", "experience", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link className="logo" href="/#top">
          {site.name}
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.id} href={item.href} data-active={active === item.id}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-end">
          <a
            className="icon-link"
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          style={{
            position: "absolute",
            inset: "var(--nav-h) 0 auto",
            background: "var(--paper)",
            borderBottom: "1px solid var(--line)",
            padding: "1rem var(--gutter) 1.25rem",
            display: "grid",
            gap: "0.85rem",
          }}
        >
          {nav.map((item) => (
            <Link key={item.id} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5A11.5 11.5 0 0 0 8.34 22.9c.58.1.79-.25.79-.56v-2.17c-3.21.7-3.89-1.38-3.89-1.38-.53-1.35-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.28 5.69.41.35.78 1.05.78 2.13v3.16c0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  );
}
