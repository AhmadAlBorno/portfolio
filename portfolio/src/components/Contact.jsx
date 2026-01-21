import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css"

export default function Contact() {
  return (
    <section id="contact">
      <h2 style={{ fontSize: '3.5rem', marginBottom: '30px' }}>Get In <span className="blue-t">Touch</span></h2>
      <div className="glass-card" style={{ maxWidth: '600px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" placeholder="Name" style={{ padding: '15px', background: '#0f172a', border: '1px solid #334155', borderRadius: '10px', color: 'white' }} />
          <input type="email" placeholder="Email" style={{ padding: '15px', background: '#0f172a', border: '1px solid #334155', borderRadius: '10px', color: 'white' }} />
          <textarea placeholder="Message" rows="5" style={{ padding: '15px', background: '#0f172a', border: '1px solid #334155', borderRadius: '10px', color: 'white' }}></textarea>
          <button style={{ padding: '15px', background: '#3b82f6', color: 'white', borderRadius: '10px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Send Message</button>
        </form>
      </div>
    </section>
  );
}