import SectionTitle from "./SectionTitle";
import { rowOne, rowTwo } from "../data/skills";
import type { Skill } from "../data/skills";

function Row({ skills, reverse }: { skills: Skill[]; reverse?: boolean }) {
  const tripled = [...skills, ...skills, ...skills];
  return (
    <div className="marquee-container">
      <div className={`marquee ${reverse ? "reverse" : ""}`}>
        {tripled.map((s, i) => (
          <div className="skill-chip" key={i}>
            <span className="skill-icon" style={{ color: s.color }}>{s.icon}</span>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills">
      <SectionTitle>My Skills</SectionTitle>
      <Row skills={rowOne} />
      <Row skills={rowTwo} reverse />
    </section>
  );
}