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
    <section className="bg-black py-20 overflow-hidden">
      <div className="px-10 mb-10">
        <h2 className="text-gray-500 uppercase tracking-[0.3em] text-xs">Project Showcase</h2>
      </div>

      <div className="flex">
        <motion.div 
          className="flex gap-10 pr-10"
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => startAnimation()}
        >
          {infiniteProjects.map((project, index) => (
            <div 
              key={index} 
              className="relative h-[450px] w-[350px] md:w-[550px] flex-shrink-0 rounded-[40px] border border-white/10 bg-gradient-to-br p-12 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div className="flex justify-between items-center text-gray-500 font-mono text-sm">
                <span>{project.id}</span>
                <span className="uppercase tracking-widest text-[10px]">{project.tech}</span>
              </div>

              <div className="z-10">
                <h3 className={`text-4xl font-black text-white tracking-tighter leading-none mb-4 transition-colors`}>
                  {project.title}
                </h3>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  →
                </div>
              </div>

              <div className={`absolute -bottom-10 -right-10 w-64 h-64 ${project.glow} blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-700`} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;