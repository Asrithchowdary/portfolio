import type { ReactNode } from "react";
import {
  SiPython, SiFastapi, SiDocker, SiReact, SiTypescript, SiSpringboot,
  SiPostgresql, SiMysql, SiGit, SiPandas, SiNumpy, SiPytorch, SiMongodb,
  SiLinux, SiOpenai,
} from "react-icons/si";
import { FaJava, FaLink, FaProjectDiagram, FaDatabase, FaRobot } from "react-icons/fa";

export interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
}

export const rowOne: Skill[] = [
  { name: "Python", icon: <SiPython />, color: "#3776ab" },
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#05998b" },
  { name: "LangChain", icon: <FaLink />, color: "#4ade80" },
  { name: "LangGraph", icon: <FaProjectDiagram />, color: "#a855f7" },
  { name: "RAG", icon: <FaDatabase />, color: "#38bdf8" },
  { name: "AI Agents", icon: <FaRobot />, color: "#f59e0b" },
  { name: "OpenAI API", icon: <SiOpenai />, color: "#ffffff" },
  { name: "React", icon: <SiReact />, color: "#61dafb" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
];

export const rowTwo: Skill[] = [
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
  { name: "Git", icon: <SiGit />, color: "#f05032" },
  { name: "Linux", icon: <SiLinux />, color: "#fcc624" },
  { name: "Pandas", icon: <SiPandas />, color: "#b4b4ff" },
  { name: "NumPy", icon: <SiNumpy />, color: "#4dabcf" },
  { name: "PyTorch", icon: <SiPytorch />, color: "#ee4c2c" },
];