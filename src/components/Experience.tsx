import { useState } from "react";
import { FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/experience";

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="experience">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="dashed-card exp-timeline">
        <div className="exp-line" />
        {experience.map((e, i) => (
          <div className="exp-item" key={e.company}>
            <span className={`exp-dot ${e.status}`} />
            <div className="exp-header">
              <div>
                <div className="exp-company">
                  {e.company}
                  {e.link && (
                    <a href={e.link} target="_blank" rel="noopener noreferrer" aria-label={`${e.company} website`}>
                      <FaExternalLinkAlt size={10} />
                    </a>
                  )}
                  <span className={`exp-badge ${e.status}`}>
                    {e.status === "present" ? "Active" : "Done"}
                  </span>
                </div>
                <div className="exp-role">{e.role}</div>
              </div>
              <div className="exp-right">
                <span className="exp-dates">{e.dates}</span>
                <button
                  type="button"
                  className="exp-toggle"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-label="Toggle details"
                >
                  <FaChevronDown className={open === i ? "open" : ""} />
                </button>
              </div>
            </div>
            {open === i && (
              <ul className="exp-bullets">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}