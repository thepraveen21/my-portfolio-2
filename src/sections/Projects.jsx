import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const projects = [
  { 
    id: "01", 
    title: "Student Registration System", 
    tech: "Laravel / MySQL", 
    color: "from-[#081e36] to-[#0a0f1d]", 
    glow: "bg-blue-500/20"
  },
  { 
    id: "02", 
    title: "Book Management System", 
    tech: ".NET 8 / Angular", 
    color: "from-[#1d113a] to-[#0a0f1d]", 
    glow: "bg-purple-500/20"
  },
  { 
    id: "03", 
    title: "SaaS UI Portfolio", 
    tech: "React / Tailwind", 
    color: "from-[#0a1f1a] to-[#0a0f1d]", 
    glow: "bg-emerald-500/20"
  },
];

const infiniteProjects = [...projects, ...projects];

const Projects = () => {
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        ease: "linear",
        duration: 25,
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, [controls]);

  return (
    <section className="bg-black py-20 overflow-hidden px-10 md:px-20 relative">
      {/* Decorative Glow Background - Emerald instead of sky blue */}
      <div className="absolute top-1/2 right-[-5%] w-80 h-80 bg-emerald-600/10 blur-[120px] rounded-full -z-10" />

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true }}
        className="mb-20 max-w-7xl mx-auto"
      >
        <motion.h2 
          className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-4"
          whileInView={{ letterSpacing: "0.4em" }}
          transition={{ duration: 0.6 }}
        >
          Project Showcase
        </motion.h2>
        <motion.h3 
          className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.95 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          RECENT <br /> <span className="text-white/40">PROJECTS.</span>
        </motion.h3>
      </motion.div>

      <div className="flex">
        <motion.div 
          className="flex gap-10 pr-10"
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => startAnimation()}
        >
          {infiniteProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 3) * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[450px] w-[350px] md:w-[550px] flex-shrink-0 rounded-[40px] border border-white/10 bg-gradient-to-br p-12 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <motion.div 
                className="flex justify-between items-center text-gray-500 font-mono text-sm"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span>{project.id}</span>
                <span className="uppercase tracking-widest text-[10px]">{project.tech}</span>
              </motion.div>

              <motion.div 
                className="z-10"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className={`text-4xl font-black text-white tracking-tighter leading-none mb-4 transition-colors`}>
                  {project.title}
                </h3>
                <motion.div 
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"
                  whileHover={{ rotate: 45, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  →
                </motion.div>
              </motion.div>

              <motion.div 
                className={`absolute -bottom-10 -right-10 w-64 h-64 ${project.glow} blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-700`}
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;