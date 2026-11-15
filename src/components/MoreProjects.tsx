import { useState } from "react";
import { FaArrowRight, FaGithub, FaStar } from "react-icons/fa";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
}

type Status = "idle" | "loading" | "done" | "error";

export default function MoreProjects() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [repos, setRepos] = useState<Repo[]>([]);

  const featured = new Set(projects.map((p) => p.github.toLowerCase()));
  const allRepos = `${profile.github}?tab=repositories`;

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next && status === "idle") {
      setStatus("loading");
      fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=100`)
        .then((r) => {
          if (!r.ok) throw new Error("request failed");
          return r.json();
        })
        .then((data: Repo[]) => {
          setRepos(data.filter((r) => !r.fork && !r.archived));
          setStatus("done");
        })
        .catch(() => setStatus("error"));
    }
  };

  const more = repos.filter(
    (r) => !featured.has(r.html_url.toLowerCase()) && r.name.toLowerCase() !== "portfolio"
  );

  return (
    <div className="more-projects">
      <div className="more-actions">
        <button type="button" className="view-all-btn" onClick={toggle}>
          {open ? "Show less" : "More Projects"} <FaArrowRight size={11} />
        </button>
        <a href={allRepos} target="_blank" rel="noopener noreferrer" className="view-all-btn">
          All repositories <FaGithub size={13} />
        </a>
      </div>

      {open && (
        <div className="more-list">
          {status === "loading" && <p className="more-note">Loading repositories…</p>}
          {status === "error" && (
            <p className="more-note">
              Couldn't load repositories right now.{" "}
              <a href={allRepos} target="_blank" rel="noopener noreferrer">View them on GitHub</a>.
            </p>
          )}
          {status === "done" && more.length === 0 && (
            <p className="more-note">No other public repositories yet.</p>
          )}
          {more.map((r) => (
            <a
              key={r.id}
              href={r.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="dashed-card repo-card"
            >
              <div className="repo-name">{r.name}</div>
              <p className="repo-desc">{r.description ?? "No description yet."}</p>
              <div className="repo-meta">
                {r.language && <span>{r.language}</span>}
                {r.stargazers_count > 0 && (
                  <span><FaStar size={10} /> {r.stargazers_count}</span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}