import { useEffect, useState } from "react";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaHeart,
  FaCode, FaQrcode, FaUser,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { QRCodeSVG } from "qrcode.react";
import { profile } from "../data/profile";

function useClock(timeZone: string) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}

function renderBio(line: string) {
  return line.split("**").map((part, i) =>
    i % 2 ? <span key={i} className="hl">{part}</span> : part
  );
}

export default function Hero() {
  const time = useClock(profile.timeZone);
  const [showQr, setShowQr] = useState(false);

  return (
    <section className="hero">
      <div className="hero-top">
        <div className="avatar-wrap">
          {showQr ? (
            <div className="avatar qr-box">
              <QRCodeSVG value={profile.qrValue} size={104} />
            </div>
          ) : (
            <img src="/avatar.png" alt={profile.name} className="avatar" />
          )}
          <button
            type="button"
            className="qr-toggle"
            onClick={() => setShowQr((v) => !v)}
            aria-label={showQr ? "Show photo" : "Show QR code"}
          >
            {showQr ? <FaUser size={12} /> : <FaQrcode size={12} />}
          </button>
        </div>

        <div className="hero-info">
          <h1 className="hero-name">
            {profile.name} <FaHeart className="heart" />
          </h1>
          <div className="hero-handle">{profile.handle}</div>
          <div className="hero-role">{profile.role}</div>
          <div className="hero-meta">
            <FaMapMarkerAlt /> {profile.location}
            <span className="dot">•</span>
            <span>{time}</span>
          </div>
        </div>
      </div>

      <ul className="bio">
        {profile.bio.map((line, i) => (
          <li key={i}>
            <span className="bio-marker" />
            <span>{renderBio(line)}</span>
          </li>
        ))}
      </ul>

      <div className="hero-divider" />

      <div className="social-cards">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="dashed-card social-card">
          <FaGithub size={26} />
          <div className="social-text">
            <b>GitHub</b>
            <small>{profile.githubUser}</small>
          </div>
          <span className="pill-btn">Follow</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="dashed-card social-card">
          <FaLinkedin size={26} color="#0a66c2" />
          <div className="social-text">
            <b>{profile.name}</b>
            <small>{profile.role}</small>
          </div>
          <span className="pill-btn blue">Connect</span>
        </a>
      </div>

      <div className="contact-row">
        <a href={profile.emailLink} target="_blank" rel="noopener noreferrer" className="mini-btn" title="Email me">
          <FaEnvelope /> Email Me
        </a>
        <span>|</span>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mini-btn" title="GitHub" aria-label="GitHub"><FaGithub /></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mini-btn" title="LinkedIn" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="mini-btn" title="LeetCode" aria-label="LeetCode"><SiLeetcode /></a>
        <a href={profile.neetcode} target="_blank" rel="noopener noreferrer" className="mini-btn" title="NeetCode" aria-label="NeetCode"><FaCode /></a>
      </div>
    </section>
  );
}