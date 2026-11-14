export interface Project {
  name: string;
  desc: string;
  tech: string[];
  github: string;
  badge?: string;
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
];