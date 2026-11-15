export interface Project {
  name: string;
  desc: string;
  tech: string[];
  github: string;
  badge?: string;
  banner?: string;
}

const GH = "https://github.com/Asrithchowdary";

export const projects: Project[] = [
  {
    name: "ResearchMind",
    badge: "Multi-Agent AI",
    desc: "Multi-agent research system. CrewAI search and reader agents gather sources, then LangChain writer and critic chains produce a report. A citation guardrail cross-checks every source against real scraped data to catch hallucinated citations, and an evaluation suite scores report quality.",
    tech: ["Python", "CrewAI", "LangChain", "Ollama", "Qwen2.5", "Tavily", "FastAPI"],
    github: `${GH}/Research-Mind-Multi-Agent-Research-System`,
    // banner: "/projects/researchmind.png",
  },
  {
    name: "Financial Agent API",
    badge: "LangGraph + FastAPI",
    desc: "FastAPI service that accepts a financial PDF and a claimed net income, parses the document, validates the claim against the extracted data with a LangGraph workflow, and returns an LLM summary. Also benchmarks PDF extraction backends on real earnings reports.",
    tech: ["Python", "FastAPI", "LangGraph", "Docling", "RapidOCR", "Ollama", "Mistral"],
    github: `${GH}/Financial-Agent-API`,
    // banner: "/projects/financial-agent.png",
  },
  {
    name: "Email Inbox Routing Agent",
    badge: "AI Agent",
    desc: "AI agent that reads incoming emails and routes each one to the right destination.",
    tech: ["Python", "AI Agents"],
    github: `${GH}/Email-Inbox-Routing-Agent`,
    // banner: "/projects/email-routing.png",
  },
  {
    name: "RAG Q&A Chatbot",
    badge: "RAG",
    desc: "Chatbot that answers questions about uploaded documents. Chunks and embeds content into ChromaDB, retrieves relevant context, and generates grounded answers with Gemini through a Streamlit UI.",
    tech: ["Python", "LangChain", "ChromaDB", "Gemini API", "Streamlit"],
    github: `${GH}/RAG-Resume-Chatbot`,
    // banner: "/projects/rag-chatbot.png",
  },
  {
    name: "Incident Management Platform",
    badge: "Spring Boot",
    desc: "Spring Boot platform that deduplicates incidents by fingerprint, classifies severity (P1/P2/P3) with a rule engine and anomaly detection, maps incidents to runbooks, and exposes a metrics API and a resolve endpoint. A scheduled scanner and bulk log seeder drive the pipeline.",
    tech: ["Java 21", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "Maven", "Actuators", "Restful APIs"],
    github: `${GH}/Incident-Management-Platform`,
    // banner: "/projects/incident-platform.png",
  },
  {
    name: "Inventory and Deals Platform",
    badge: "Full Stack",
    desc: "Full-stack inventory and deals app with a Spring Boot REST backend and React frontend: JWT authentication, product browsing and filtering, cart, deals pages and order status, with Razorpay test-mode payments.",
    tech: ["Java", "Spring Boot", "MySQL", "React", "JWT", "Razorpay", "REST API", "Maven"],
    github: `${GH}/Inventory-Application`,
    // banner: "/projects/inventory-app.png",
  },
  {
    name: "Schedula",
    badge: "PearlThoughts Internship",
    desc: "Doctor appointment scheduling backend built during my PearlThoughts internship: NestJS project setup, ER design, and flowcharts for the booking, rescheduling and cancellation flows.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM"],
    github: `${GH}/schedula-asrith`,
    // banner: "/projects/schedula.png",
  },
];