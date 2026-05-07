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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-4">Expertise</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter">TECHNICAL <br/> <span className="text-white/40">SERVICES.</span></h3>
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:grid md:grid-cols-[100px_1fr_auto] items-start md:items-center py-12 border-b border-white/10 hover:bg-white/[0.02] transition-all px-4"
            >
              {/* Numbering Style */}
              <span className="text-xl font-bold text-gray-700 group-hover:text-sky-500 transition-colors mb-4 md:mb-0">
                {service.id}
              </span>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h4 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h4>
                </div>
                <p className="text-gray-500 max-w-lg mt-2 md:ml-10">{service.desc}</p>
              </div>

              {/* Visual CTA */}
              <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-10 h-10 text-white/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;