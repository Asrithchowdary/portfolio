import type { ReactNode } from "react";
import {
  SiPython, SiFastapi, SiDocker, SiReact, SiTypescript, SiSpringboot,
  SiPostgresql, SiMysql, SiGit, SiLinux,
} from "react-icons/si";
import {
  FaJava, FaLink, FaProjectDiagram, FaDatabase, FaRobot, FaBrain, FaSearch,
} from "react-icons/fa";

export interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
}

export const rowOne: Skill[] = [
  { name: "Python", icon: <SiPython />, color: "#3776ab" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#05998b" },
  { name: "LangChain", icon: <FaLink />, color: "#4ade80" },
  { name: "LangGraph", icon: <FaProjectDiagram />, color: "#a855f7" },
  { name: "RAG", icon: <FaDatabase />, color: "#38bdf8" },
  { name: "AI Agents", icon: <FaRobot />, color: "#f59e0b" },
  { name: "LLM APIs", icon: <FaBrain />, color: "#ffffff" },
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
  { name: "React", icon: <SiReact />, color: "#61dafb" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
];

export const rowTwo: Skill[] = [
  { name: "ChromaDB", icon: <FaDatabase />, color: "#ff6f61" },
  { name: "FAISS", icon: <FaSearch />, color: "#3b82f6" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
  { name: "pgvector (basics)", icon: <SiPostgresql />, color: "#4169e1" },
  { name: "Docker (basics)", icon: <SiDocker />, color: "#2496ed" },
  { name: "Linux (basics)", icon: <SiLinux />, color: "#fcc624" },
  { name: "Git", icon: <SiGit />, color: "#f05032" },
];