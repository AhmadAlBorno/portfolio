import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";
import { link, title } from "framer-motion/client";

const projects = [
  {
    title: "Travel Platform",
    stack: "MERN Stack",
    desc: "End-to-end booking platform with PayPal.",
  },
  {
    title: "Cake E-Shop",
    stack: "JavaScript / jQuery",
    desc: "Dynamic e-commerce with mobile-first UI.",
  },
];

export default function Projects() {
  const projects = [
    {
      title: "Bretix",
      stack: "PERN Stack (PostgreSQL, Express.js, React.js, Node.js)",
      desc: "Team-based eco-friendly multi-vendor e-commerce platform with secure authentication and RESTful APIs.",
    },
    {
      title: "Travel Platform",
      stack: "MERN Stack",
      desc: "End-to-end booking platform with PayPal integration.",
    },
    {
      title: "Cake E-Shop",
      stack: "JavaScript / jQuery",
      desc: "Dynamic e-commerce website with mobile-first UI and real-time DOM manipulation.",
    },
  ];

  return (
    <section id="projects">
      <h2 style={{ fontSize: "3.5rem", marginBottom: "50px" }}>
        Featured <span className="blue-t">Work</span>
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          width: "100%",
        }}
      >
        {projects.map((p, i) => (
          <div key={i} className="glass-card">
            <span
              style={{
                color: "#3b82f6",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              {p.stack}
            </span>
            <h3 style={{ fontSize: "2rem", margin: "15px 0" }}>{p.title}</h3>
            <p style={{ color: "#94a3b8", marginBottom: "20px" }}>{p.desc}</p>
            <button
              style={{
                background: "transparent",
                border: "none",
                borderBottom: "2px solid #3b82f6",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => {
                if (p.title === "Bretix") {
                  window.open(
                    "https://www.youtube.com/watch?v=sxqTV_aOUu4",
                    "_blank",
                  );
                } else if (p.title === "Travel Platform") {
                  window.open("_blank");
                }
              }}
            >
              EXPLORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
