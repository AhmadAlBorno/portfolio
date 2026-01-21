import "./About.css";
import { motion } from "framer-motion";
import "./About.css"
export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto text-center md:text-left">
      <motion.h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-blue-500 text-glow">Me</span>
      </motion.h2>

      <motion.div className="glass-card p-8 md:p-12 about-card">
        <p className="mb-6">
          I am a performance-driven <span className="about-white">Full Stack Developer</span> with a solid Computer Science background and intensive training from <span className="about-highlight">Meraki Academy</span>.
        </p>
        <p className="mb-6">
          I specialize in architecting scalable web applications using the <span className="about-highlight">MERN Stack</span>, building secure RESTful APIs, and designing responsive user interfaces.
        </p>
        <p>
          I enjoy transforming complex business requirements into seamless digital solutions, integrating <span className="about-white">payment gateways</span>, and continuously improving user experience.
        </p>
      </motion.div>
    </section>
  );
}