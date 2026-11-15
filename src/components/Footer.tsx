import { Link } from "react-router-dom";
import { FaCode, FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/profile";

const links = [
  { label: "Email", href: profile.emailLink, icon: <FaEnvelope /> },
  { label: "LinkedIn", href: profile.linkedin, icon: <FaLinkedin /> },
  { label: "GitHub", href: profile.github, icon: <FaGithub /> },
  { label: "LeetCode", href: profile.leetcode, icon: <SiLeetcode /> },
  { label: "NeetCode", href: profile.neetcode, icon: <FaCode /> },
];

export default function Footer() {
  return (
    <footer className="page footer">
      <div className="dashed-card connect-card">
        <h3>Let's Connect</h3>
        <p>Have a role or project in mind? Reach out on any of these.</p>
        <div className="connect-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="connect-btn">
              {l.icon} {l.label}
            </a>
          ))}
          <Link to="/resume" className="connect-btn">
            <FaFilePdf /> Resume
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Asrith Chowdary</span>
        <span>Built with React + TypeScript</span>
      </div>
    </footer>
  );
}