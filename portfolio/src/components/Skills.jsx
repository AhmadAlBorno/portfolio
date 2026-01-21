import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import "./Skills.css"

const skills = [
  { title: "Frontend", items: ["React.js", "Tailwind", "Redux"] },
  { title: "Backend", items: ["Node.js", "Express", "JWT"] },
  { title: "Database", items: ["MongoDB", "Mongoose"] },
  { title: "Tools", items: ["Git", "Postman", "PayPal"] }
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-4xl md:text-6xl font-black mb-20 glow-text">MY ARSENAL</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {skills.map((s) => (
          <div key={s.title} className="glass-panel p-10 text-center">
            <h3 className="text-blue-500 font-bold mb-4 tracking-widest">{s.title}</h3>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              {s.items.map(i => <span key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}