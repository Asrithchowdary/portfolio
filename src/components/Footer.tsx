import { Link } from "react-router-dom";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import Pal from "./Pal";

const links = [
  { label: "Email", href: profile.emailLink, icon: <FaEnvelope /> },
  { label: "LinkedIn", href: profile.linkedin, icon: <FaLinkedin /> },
  { label: "GitHub", href: profile.github, icon: <FaGithub /> },
];

export default function Footer() {
  return (
    <footer className="page footer">
      <div className="dashed-card connect-card">
        <h3>
          Let's Connect <Pal pal="moss" />
        </h3>
        <p>Have a role or project in mind? Reach out on any of these.</p>
        <div className="connect-links">
          <Link to="/resume" className="connect-btn">
            <FaFilePdf /> Resume
          </Link>
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="connect-btn">
              {l.icon} {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Asrith Chowdary</span>
      </div>
    </footer>
  );
}