import "./ScrollProgress.css";
import { useEffect, useState } from "react";
import "./ScrollProgress.css"

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ width: `${scroll}%` }} />
    </div>
  );
}