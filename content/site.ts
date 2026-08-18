export const site = {
  name: "Sinchana S",
  role: "Software Engineer",
  positioning: "Backend · AI · Full-Stack Systems",
  location: "Bengaluru, India",
  headline: "I build software systems that turn complex problems into simple experiences.",
  intro:
    "Software Engineer working across backend systems, AI-powered applications, APIs, and cloud infrastructure.",
  currently: "Prudential plc Technology",
  email: "sinchanas0512@gmail.com",
  phone: "+91 8217823743",
  github: "https://github.com/SwiftCoder05",
  linkedin: "https://www.linkedin.com/in/sinchanas05/",
  leetcode: "https://leetcode.com/u/sinchhh_rao05/",
} as const;

export const education = {
  school: "RNS Institute of Technology",
  degree: "Bachelor of Engineering — Computer Science",
  dates: "Dec 2022 — May 2026",
  detail: "CGPA 9.0",
  place: "Bengaluru, Karnataka",
} as const;

export const experience = [
  {
    id: "prudential",
    company: "Prudential plc Technology",
    role: "Software Engineer",
    dates: "Feb 2026 — Present",
    location: "Bengaluru, India",
    summary: "Backend services, APIs, and AI-supporting workflows in production engineering teams.",
    bullets: [
      "Developed scalable backend services and enterprise applications using Python and cloud-native technologies.",
      "Built and maintained reliable REST APIs and workflow automation solutions supporting AI-powered applications.",
      "Designed and developed Fast APIs to improve response relevance and retrieval accuracy.",
      "Collaborated with cross-functional teams in Agile environments, participating in sprint planning, standups, and code reviews.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "REST APIs",
      "GCP",
      "Cloud Run",
      "Google ADK",
      "Agent orchestration",
    ],
  },
] as const;

export const stackGroups = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs"],
  },
  {
    id: "data",
    label: "Data",
    items: ["PostgreSQL", "Redis"],
  },
  {
    id: "ai",
    label: "AI",
    items: [
      "LangChain",
      "RAG",
      "Embeddings",
      "Vector Search",
      "OpenAI",
      "Google ADK",
      "Agentic AI",
      "Workflow orchestration",
      "Neural networks",
      "Deep learning",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    items: ["GCP", "Cloud Run", "Git", "GitHub", "CI/CD", "Docker", "Kubernetes"],
  },
] as const;

export type ProjectSlug = "mock2win" | "docuchat";

export const projects: Record<
  ProjectSlug,
  {
    slug: ProjectSlug;
    name: string;
    index: string;
    kind: string;
    year: string;
    blurb: string;
    stack: string[];
    github: string;
    problem: string;
    built: string;
    architecture: string;
    notes: string[];
  }
> = {
  mock2win: {
    slug: "mock2win",
    name: "Mock2Win",
    index: "01",
    kind: "AI Interview Platform",
    year: "2025",
    blurb:
      "A voice-first mock interview system: you talk, the interviewer talks back, the session is stored, and feedback is generated from the transcript.",
    stack: ["TypeScript", "Next.js", "Vapi AI", "WebRTC", "Python"],
    github: "https://github.com/SwiftCoder05/Mock2Win",
    problem:
      "Written mock interviews miss the actual failure mode: thinking out loud under time pressure. I wanted a practice loop that felt like a live call, not a form.",
    built:
      "A Next.js application where a candidate signs in, starts a session, and speaks with an AI interviewer over a live voice connection. Session state moves through inactive, connecting, active, and finished. Final transcripts are used to generate performance feedback.",
    architecture:
      "The public repo is a TypeScript Next.js app. Voice is handled through the Vapi Web SDK (WebRTC under the call). Firebase Authentication plus Firestore persist users; server actions mint an HTTP-only session cookie. Interview cards, transcripts, and a post-call feedback path sit around that live session.",
    notes: [
      "Call lifecycle: INACTIVE → CONNECTING → ACTIVE → FINISHED",
      "Speech start/end events drive the speaking indicator",
      "Final transcripts are captured and stored as the conversation",
      "Auth: sign-in / sign-up with Firebase, session cookie for a week",
      "Resume also lists Python backend services for voice workflows and REST around the session",
    ],
  },
  docuchat: {
    slug: "docuchat",
    name: "DocuChat",
    index: "02",
    kind: "Document Q&A / RAG",
    year: "2025",
    blurb:
      "Ask a document a question in plain language. The system retrieves the relevant chunks, then answers from that context.",
    stack: ["LangChain", "RAG", "Pinecone", "Embeddings", "Semantic Search"],
    github: "https://github.com/SwiftCoder05/DocuChat",
    problem:
      "LLMs guess. For PDFs, DOCX, and notes, guessing is the wrong default. The answer should come from the file you actually uploaded.",
    built:
      "A Python RAG application that loads PDFs, DOCX, TXT, or Wikipedia pages, splits them into chunks, embeds those chunks, stores them in a vector index, and answers questions using retrieved context. Conversations can continue with memory instead of starting from zero each turn.",
    architecture:
      "LangChain orchestrates the pipeline. OpenAI text-embedding-3-small turns chunks and queries into vectors. Pinecone holds the index for similarity search. GPT-3.5-Turbo writes the final answer from the retrieved top-K chunks. The documented flow is load → split → embed → store → retrieve → generate.",
    notes: [
      "Sources: PDF, DOCX, TXT, Wikipedia",
      "Embeddings: OpenAI text-embedding-3-small",
      "Generation: GPT-3.5-Turbo with retrieved context",
      "Vector store: Pinecone for production-style retrieval",
      "Multi-turn memory so follow-up questions stay on the same documents",
    ],
  },
};

export const projectList = [projects.mock2win, projects.docuchat] as const;

export const nav = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#contact", id: "contact", label: "Contact" },
] as const;
