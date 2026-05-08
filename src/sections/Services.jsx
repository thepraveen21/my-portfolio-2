import { motion } from "framer-motion";
import { Code2, Layout, MessageSquare, ArrowUpRight } from "lucide-react";

const services = [
  { 
    id: "01", 
    title: "Full-Stack Development", 
    desc: "Expertise in building scalable systems using Laravel, .NET 8, and MySQL logic.", 
    icon: <Code2 className="w-6 h-6 text-sky-500" />
  },
  { 
    id: "02", 
    title: "SaaS UI/UX Design", 
    desc: "Focusing on clean white space, rounded corners, and modern interfaces for management systems.", 
    icon: <Layout className="w-6 h-6 text-purple-500" />
  },
  { 
    id: "03", 
    title: "Automated Solutions", 
    desc: "Integrating WhatsApp and Email notifications for seamless student and payment tracking.", 
    icon: <MessageSquare className="w-6 h-6 text-pink-500" />
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-black text-white py-24 px-10 md:px-20 relative overflow-hidden">
      
      {/* Matching Sky Blue Glow */}
      <div className="absolute top-1/2 right-[-5%] w-80 h-80 bg-sky-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2 
            className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-4"
            whileInView={{ letterSpacing: "0.4em" }}
            transition={{ duration: 0.6 }}
          >
            Expertise
          </motion.h2>
          <motion.h3 
            className="text-5xl md:text-7xl font-black tracking-tighter"
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.95 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            TECHNICAL <br/> <span className="text-white/40">SERVICES.</span>
          </motion.h3>
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6, type: "spring", stiffness: 100, damping: 25 }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
              className="group flex flex-col md:grid md:grid-cols-[100px_1fr_auto] items-start md:items-center py-12 border-b border-white/10 transition-all px-4 cursor-pointer"
            >
              {/* Numbering Style */}
              <motion.span 
                className="text-xl font-bold text-gray-700 group-hover:text-sky-500 transition-colors mb-4 md:mb-0"
                whileHover={{ scale: 1.2, color: "#0ea5e9" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {service.id}
              </motion.span>

              {/* Title & Description */}
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h4 
                    className="text-3xl md:text-4xl font-bold tracking-tight"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {service.title}
                  </motion.h4>
                </div>
                <motion.p 
                  className="text-gray-500 max-w-lg mt-2 md:ml-10"
                  whileHover={{ color: "rgba(156, 163, 175, 1)" }}
                  transition={{ duration: 0.3 }}
                >
                  {service.desc}
                </motion.p>
              </div>

              {/* Visual CTA */}
              <motion.div 
                className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.3, rotate: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <ArrowUpRight className="w-10 h-10 text-white/20" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;