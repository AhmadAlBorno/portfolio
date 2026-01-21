import { motion } from "framer-motion";
import "./Education.css"

const education = [
  { title: "Full Stack Developer Program", place: "Meraki Academy", year: "2025", description: "Intensive training on MERN stack and clean architecture." },
  { title: "B.Sc. in Computer Science", place: "Hashemite University", year: "2017", description: "Foundations in data structures, algorithms, and databases." },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold mb-20 text-center"
      >
        Education
      </motion.h2>
      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 pl-10 space-y-16">
        {education.map((item, index) => (
          <motion.div 
            key={item.title} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <span className="edu-dot" />
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-blue-500 font-medium my-2">{item.place} • {item.year}</p>
            <p className="text-slate-400 leading-relaxed max-w-2xl">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}