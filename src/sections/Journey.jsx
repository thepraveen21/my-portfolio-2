import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026 - PRESENT",
    title: "Full-Stack Freelancer",
    company: "Fiverr & Upwork",
    description: "Specializing in building management systems with Laravel and .NET 8. Focus on clean SaaS aesthetics and automated notification modules.",
  },
  {
    year: "2025 - 2026",
    title: "Software Developer",
    company: "Student Registration Project",
    description: "Developed a comprehensive QR-based attendance and payment tracking system using Laravel and MySQL for educational institutes.",
  },
  {
    year: "2024 - 2025",
    title: "IT Undergraduate",
    company: "University Degree",
    description: "Deepening knowledge in software architecture, database management, and modern web frameworks like Angular and React.",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="bg-black text-white py-40 px-10 md:px-20 relative overflow-hidden">
      
      {/* Decorative Glow - Neon Sky Blue */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-sky-600/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header - Matching Projects & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true }}
          className="mb-20 max-w-7xl"
        >
          <motion.h2 
            className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-4"
            whileInView={{ letterSpacing: "0.4em" }}
            transition={{ duration: 0.6 }}
          >
            Journey
          </motion.h2>
          <motion.h3 
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.95 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            MY <br /> <span className="text-white/40">JOURNEY.</span>
          </motion.h3>
        </motion.div>

        {/* Experience Timeline */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-[250px_1fr] py-16 border-t border-white/10 group hover:bg-white/[0.02] transition-all px-4"
            >
              <div className="flex flex-col gap-2 mb-6 md:mb-0">
                <span className="text-sky-500 font-black tracking-widest text-sm">{exp.year}</span>
                <span className="text-gray-600 font-bold uppercase text-[10px] tracking-[0.3em] group-hover:text-white transition-colors">
                  {exp.company}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-4xl md:text-6xl font-black tracking-tighter group-hover:text-sky-400 transition-colors">
                  {exp.title}
                </h4>
                <p className="text-gray-500 max-w-2xl leading-relaxed text-lg">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;