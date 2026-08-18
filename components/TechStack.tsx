"use client";

import { useState } from "react";
import { stackGroups } from "@/content/site";

export function TechStack() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="section wrap" id="stack">
      <div className="section-head">
        <p className="kicker">Engineering stack</p>
        <p className="index">04 / Tools</p>
      </div>
      <div className="stack-board">
        {stackGroups.map((group) => (
          <div className="stack-row" key={group.id}>
            <p className="stack-label">{group.label}</p>
            <div className="stack-items">
              {group.items.map((item) => (
                <button
                  key={item}
                  className="tag"
                  type="button"
                  data-active={active === group.id}
                  onMouseEnter={() => setActive(group.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(group.id)}
                  onBlur={() => setActive(null)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
