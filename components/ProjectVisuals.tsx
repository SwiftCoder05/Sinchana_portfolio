export function Mock2WinVisual() {
  return (
    <div className="project-visual" aria-hidden="true">
      <span className="visual-label">
        <span className="live-dot" /> Session · live voice
      </span>
      <div className="visual-grid" />
      <div className="wave">
        {Array.from({ length: 36 }).map((_, i) => (
          <span
            key={i}
            className={i > 14 && i < 22 ? "hot" : undefined}
            style={{
              height: `${28 + ((i * 17) % 64)}%`,
              animationDelay: `${i * 40}ms`,
            }}
          />
        ))}
      </div>
      <div className="session-meta">
        <Row state="ACTIVE" label="Interviewer" detail="speaking" />
        <Row state="LISTEN" label="Candidate" detail="mic open" />
        <div className="session-bar">
          <span />
        </div>
        <div className="session-foot">
          <span>00:04:12</span>
          <span>WebRTC / Vapi</span>
          <span>transcript on</span>
        </div>
      </div>
    </div>
  );
}

function Row({
  state,
  label,
  detail,
}: {
  state: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="session-row">
      <span className="st">{state}</span>
      <span>{label}</span>
      <span className="dim">{detail}</span>
    </div>
  );
}

export function DocuChatVisual() {
  const nodes = ["DOC", "CHUNKS", "EMBED", "SEARCH", "ANSWER"];
  return (
    <div className="project-visual" aria-hidden="true">
      <span className="visual-label">Pipeline · retrieval</span>
      <svg viewBox="0 0 560 320" width="100%" height="100%" className="flow-svg">
        <line
          className="flow-line"
          x1="46"
          y1="160"
          x2="514"
          y2="160"
          stroke="#efe8dc"
          strokeOpacity="0.25"
          strokeDasharray="4 6"
        />
        <circle className="flow-packet" r="4" fill="#c2410c">
          <animateMotion dur="4.5s" repeatCount="indefinite" path="M82,160 H478" />
        </circle>
        {nodes.map((node, i) => {
          const x = 46 + i * 108;
          return (
            <g key={node}>
              <rect
                x={x}
                y={128}
                width="72"
                height="64"
                fill={i === 4 ? "#c2410c" : "#efe8dc"}
                fillOpacity={i === 4 ? 1 : 0.08}
                stroke="#efe8dc"
              />
              <text
                x={x + 36}
                y={165}
                textAnchor="middle"
                fill="#efe8dc"
                fontSize="11"
                fontFamily="IBM Plex Mono, monospace"
              >
                {node}
              </text>
            </g>
          );
        })}
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={58}
            y={48 + i * 14}
            width={48 - i * 8}
            height={8}
            fill="#efe8dc"
            opacity={0.35 - i * 0.08}
          />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={i}
            className="embed-dot"
            cx={270 + (i % 2) * 18}
            cy={70 + Math.floor(i / 2) * 18}
            r="4"
            fill="#c2410c"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
        <text
          x="46"
          y="292"
          fill="#efe8dc"
          opacity="0.55"
          fontSize="11"
          fontFamily="IBM Plex Mono, monospace"
        >
          PDF · DOCX · TXT · Wikipedia → Pinecone → GPT
        </text>
      </svg>
    </div>
  );
}
