import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import "./App.css";

function App() {
  return (
    <div className="site-container relative">
      <ScrollProgress />
      <Navbar />
      <div className="relative z-10">
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