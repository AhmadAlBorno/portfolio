import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import "./Hero.css"


export default function Hero() {
  return (
    <section id="home">
      <div style={{ display: 'flex', alignItems: 'center', gap: '50px', width: '100%', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1, margin: 0 }}>
            <span className="blue-t">AHMAD</span><br />ALBORNO
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', margin: '30px 0', maxWidth: '500px' }}>
            Full Stack Developer specializing in high-end web ecosystems with the MERN stack.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#projects" style={{ padding: '15px 40px', background: 'white', color: 'black', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none' }}>My Projects</a>
            <a href="#contact" style={{ padding: '15px 40px', border: '1px solid #333', color: 'white', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none' }}>Hire Me</a>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={profile} alt="Ahmad" style={{ 
            width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '40px', 
            border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 0 50px rgba(59, 130, 246, 0.2)' 
          }} />
        </div>
      </div>
    </section>
  );
}