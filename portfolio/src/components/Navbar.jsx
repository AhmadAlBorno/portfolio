import { useState, useEffect } from "react";
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: '30px', left: '50%', transform: 'translateX(-50%)',
      width: '90%', maxWidth: '1100px', background: 'rgba(15, 23, 42, 0.7)',
      backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '15px 40px', borderRadius: '100px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center', zIndex: 1000
    }}>
      <div style={{ fontWeight: 900, letterSpacing: '2px', color: '#3b82f6', textTransform: 'uppercase' }}>
        AHMAD ALBORNO
      </div>
      <ul style={{ display: 'flex', gap: '30px', listStyle: 'none' }}>
        {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} style={{ 
              textDecoration: 'none', color: '#94a3b8', fontSize: '12px', 
              fontWeight: 700, textTransform: 'uppercase', transition: '0.3s' 
            }}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}