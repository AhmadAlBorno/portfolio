import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min"; // تأثير الشبكة الـ 3D
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3b82f6, // لون الشبكة (أزرق)
          backgroundColor: 0x020617, // لون الخلفية (كحلي غامق)
          points: 10.0,
          maxDistance: 20.0,
          spacing: 15.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
   
    <div ref={myRef} className="site-container">
      <Navbar />
      <div className="content-wrapper">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;