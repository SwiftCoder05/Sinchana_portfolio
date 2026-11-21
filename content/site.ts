export const site = {
  name: "Sinchana S",
  role: "AI Engineer",
  positioning: "Backend · AI · Full-Stack Systems",
  location: "Bengaluru, India",
  headline: "I build software systems that turn complex problems into simple experiences.",
  intro:
    "AI Engineer building backend systems, generative AI applications, APIs, and cloud infrastructure on AWS.",
  currently: "Campusmesh Technology",
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
    id: "campusmesh",
    company: "Campusmesh Technology",
    role: "AI Engineer",
    dates: "Sept 2026 — Present",
    location: "Remote",
    summary: "Leading CampusIQ and restructuring a large serverless backend into microservices.",
    bullets: [
      "Led the development of CampusIQ, an AI-powered campus intelligence assistant using AWS Bedrock and Lambda, designing permission-aware event discovery, personalized responses, and a scalable retrieval architecture.",
      "Optimized backend architecture by restructuring 110 AWS Lambda functions and 145 API routes into 9 microservices, improving modularity, code reusability, and deployment efficiency.",
    ],
    stack: ["AWS Bedrock", "AWS Lambda", "Amazon S3", "DynamoDB", "Microservices", "RAG"],
  },
  {
    id: "prudential",
    company: "Prudential plc Technology",
    role: "Engineer Intern",
    dates: "Feb 2026 — July 2026",
    location: "Bengaluru, India",
    summary: "Enterprise backend services, REST APIs, and workflow automation.",
    bullets: [
      "Developed scalable enterprise-grade backend services supporting 1000+ user requests.",
      "Built REST APIs, workflow automation, and real-time communication integrations.",
    ],
    stack: ["Python", "FastAPI", "REST APIs", "Workflow automation"],
  },
] as const;

export const stackGroups = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "JavaScript", "SQL", "DynamoDB"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: ["Amazon Bedrock", "Amazon S3", "GCP", "Docker", "Kubernetes"],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    items: ["Next.js", "FastAPI", "Node.js", "REST APIs", "Microservices"],
  },
  {
    id: "ai",
    label: "AI & Generative AI",
    items: ["Amazon Bedrock", "OpenAI", "LangChain", "LangGraph", "RAG", "LLMs", "Embeddings"],
  },
] as const;

export type ProjectSlug = "mock2win" | "kaamsetu";

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
    live?: string;
    problem: string;
    built: string;
    architecture: string;
    notes: string[];
  }
> = {
  mock2win: {
    slug: "mock2win",
    name: "Mock2Win",
    index: "02",
    kind: "AI Interview Platform",
    year: "2025",
    blurb:
      "A voice-first mock interview system: you talk, the interviewer talks back, the session is stored, and feedback is generated from the transcript.",
    stack: ["Next.js", "Vapi AI", "WebRTC", "REST APIs"],
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
    ],
  },
  kaamsetu: {
    slug: "kaamsetu",
    name: "KaamSetu",
    index: "01",
    kind: "AI-Powered Job Search & Recruiter Outreach",
    year: "2025",
    blurb:
      "A job-search platform that manages resumes and recruiter contacts, and uses LLM workflows to write context-aware outreach emails.",
    stack: ["Django", "LangGraph", "RAG", "LLMs"],
    github: "https://github.com/SwiftCoder05/KaamSetu",
    live: "https://kaamsetu-16uw.onrender.com/",
    problem:
      "Job hunting is a pile of scattered resumes, contacts, and copy-pasted emails. I wanted one workflow that keeps it organised and makes each outreach actually relevant.",
    built:
      "A Django-based job-search platform with resume management, recruiter contact management, and personalised email outreach, streamlining the whole job application workflow.",
    architecture:
      "LLM-powered workflows built with LangGraph and RAG generate context-aware recruiter emails and assist with job-description-based resume analysis and tailoring.",
    notes: [
      "Resume management and recruiter contact management",
      "Personalised email outreach",
      "LangGraph + RAG for context-aware recruiter emails",
      "Job-description-based resume analysis and tailoring",
    ],
  },
};

export const projectList = [projects.kaamsetu, projects.mock2win] as const;

export const nav = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#contact", id: "contact", label: "Contact" },
] as const;
