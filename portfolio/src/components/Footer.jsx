
import "./Footer.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer style={{
      padding: '60px 10%',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      marginTop: '100px',
      background: 'rgba(2, 6, 23, 0.5)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        
        {/* اللوجو والاسم */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '900', 
            letterSpacing: '3px', 
            color: '#3b82f6',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            AHMAD ALBORNO
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Building digital experiences that matter.
          </p>
        </div>

        {/* روابط السوشيال ميديا */}
        <div style={{ display: 'flex', gap: '25px' }}>
          <a href="https://github.com/AhmadAlBorno" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', fontSize: '1.5rem', transition: '0.3s' }} className="footer-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ahmad-alborno" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', fontSize: '1.5rem', transition: '0.3s' }} className="footer-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:sameerborno.ahmad@gmail.com" style={{ color: '#94a3b8', fontSize: '1.5rem', transition: '0.3s' }} className="footer-icon">
            <FaEnvelope />
          </a>
        </div>

        {/* حقوق النشر */}
        <div style={{ 
          width: '100%', 
          height: '1px', 
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
          margin: '10px 0' 
        }}></div>

        <p style={{ color: '#475569', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '1px' }}>
          © {new Date().getFullYear()} AHMAD ALBORNO. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}