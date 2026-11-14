import { NavLink } from "react-router-dom";

const link = ({ isActive }: { isActive: boolean }) =>
  `nav-link ${isActive ? "active" : ""}`;

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="page navbar-inner">
        <NavLink to="/" end className={link}>Home</NavLink>
        <NavLink to="/projects" className={link}>Projects</NavLink>
        <NavLink to="/resume" className={link}>Resume</NavLink>
      </nav>
    </header>
  );
}