import { FaGithub } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import MoreProjects from "./MoreProjects";
import { projects } from "../data/projects";

export default function ProjectList() {
  return (
    <section className="projects">
      <SectionTitle>My Projects</SectionTitle>
      {projects.map((p) => (
        <a
          key={p.name}
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`dashed-card project-card ${p.banner ? "has-banner" : ""}`}
        >
          {p.banner && (
            <div className="project-banner">
              <img src={p.banner} alt={p.name} loading="lazy" />
            </div>
          )}
          <div className="project-body">
            <div className="project-head">
              <div>
                <div className="project-name">{p.name}</div>
                {p.badge && <span className="project-badge">{p.badge}</span>}
              </div>
              <span className="mini-btn">
                <FaGithub /> GitHub
              </span>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </a>
      ))}
      <MoreProjects />
    </section>
  );
}