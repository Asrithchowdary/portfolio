export interface Project {
  name: string;
  desc: string;
  tech: string[];
  github: string;
  badge?: string;
  banner?: string;
}

export const projects: Project[] = [
  {
    name: "ResearchMind",
    badge: "Multi-Agent AI",
    desc: "Multi-agent research system. CrewAI search and reader agents gather sources, then LangChain writer and critic chains produce a report. A citation guardrail cross-checks every source against real scraped data to catch hallucinated citations, and an evaluation suite scores report quality.",
    tech: ["Python", "CrewAI", "LangChain", "Ollama", "Qwen2.5", "Tavily", "FastAPI"],
    github: "https://github.com/Asrithchowdary/ResearchMind",
  },
  {
    name: "Financial Statement Validator API",
    badge: "LangGraph + FastAPI",
    desc: "FastAPI service that accepts a financial PDF and a claimed net income, parses the document, validates the claim against extracted data, and generates an LLM summary of the result.",
    tech: ["Python", "FastAPI", "LangGraph", "Docling", "RapidOCR", "Ollama", "Mistral"],
    github: "https://github.com/Asrithchowdary/REPO_NAME",
  },
  {
    name: "Financial Document Analysis Pipeline",
    badge: "OCR Benchmarking",
    desc: "Notebook pipeline that benchmarks PDF extraction backends and runs end-to-end income statement validation on real earnings reports from Coca-Cola and Apple, using local LLMs for reasoning.",
    tech: ["Python", "Docling", "PyMuPDF", "pdfplumber", "PyPDF2", "Ollama", "Mistral", "LLaVA"],
    github: "https://github.com/Asrithchowdary/REPO_NAME",
  },
  {
    name: "RAG Resume Chatbot",
    badge: "RAG",
    desc: "Chatbot that answers questions about uploaded documents. Chunks and embeds content into ChromaDB, retrieves relevant context, and generates grounded answers with Gemini through a Streamlit UI.",
    tech: ["Python", "LangChain", "ChromaDB", "Gemini API", "Streamlit"],
    github: "https://github.com/Asrithchowdary/RAG-Resume-Chatbot",
  },
    {
    name: "Incident Management Platform",
    badge: "Spring Boot",
    desc: "Spring Boot platform that deduplicates incidents by fingerprint, classifies severity (P1/P2/P3) with a rule engine and anomaly detection, maps incidents to runbooks, and exposes a metrics API and a resolve endpoint. A scheduled scanner and bulk log seeder drive the pipeline.",
    tech: ["Java 21", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "Maven", "ACtuators", "Restful APIs"],
    github: "https://github.com/Asrithchowdary/Incident-Management-Platform",
  },
  {
    name: "Inventory and Deals Platform",
    badge: "Full Stack",
    desc: "Full-stack inventory and deals app with a Spring Boot REST backend and React frontend: JWT authentication, product browsing and filtering, cart, deals pages and order status, with Razorpay test-mode payments.",
    tech: ["Java", "Spring Boot", "MySQL", "React", "JWT", "Razorpay", "REST API", "MAVEN",],
    github: "https://github.com/Asrithchowdary/REPO_NAME",
  },
];