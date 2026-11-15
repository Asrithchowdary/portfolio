import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

const RESUME = "/resume.pdf";
const MOBILE = "(max-width: 700px)";

export default function Resume() {
  const [mobile, setMobile] = useState(() => window.matchMedia(MOBILE).matches);

  useEffect(() => {
    window.scrollTo(0, 0);
    const mq = window.matchMedia(MOBILE);
    const onChange = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="page">
      <SectionTitle>/resume</SectionTitle>
      <div className="resume-actions">
        <a href={RESUME} download="Asrith_Chowdary_Resume.pdf" className="mini-btn">
          <FaDownload /> Download PDF
        </a>
      </div>
      {mobile ? (
        <div className="resume-viewer resume-note">
          <p>Inline PDF preview isn't reliable on small screens.</p>
          <a href={RESUME} target="_blank" rel="noopener noreferrer" className="mini-btn">
            View / Download PDF
          </a>
        </div>
      ) : (
        <div className="resume-viewer">
          <iframe src={RESUME} title="Resume" className="resume-iframe" />
        </div>
      )}
    </div>
  );
}