import { FaGithub } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/projects";

export default function ProjectList() {
  return (
    <section className="projects">
      <SectionTitle>My Projects</SectionTitle>
      {projects.map((p) => (
        <div className="dashed-card project-card" key={p.name}>
          <div className="project-head">
            <div>
              <div className="project-name">{p.name}</div>
              {p.badge && <span className="project-badge">{p.badge}</span>}
            </div>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="mini-btn">
              <FaGithub /> GitHub
            </a>
          </div>
          <p className="project-desc">{p.desc}</p>
          <div className="project-tech">
            {p.tech.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      ))}
    </section>
  );
}