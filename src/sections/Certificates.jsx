import { motion } from "framer-motion";
import { Award, ShieldCheck, ExternalLink } from "lucide-react";

const credentials = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    issuer: "University / Online Provider",
    date: "2025",
    type: "Professional Certificate",
    icon: <Award className="w-8 h-8 text-sky-400" />
  },
  {
    id: "02",
    title: "Advanced Laravel Logic",
    issuer: "Tech Institute",
    date: "2026",
    type: "Backend License",
    icon: <ShieldCheck className="w-8 h-8 text-purple-500" />
  },
  {
    id: "03",
    title: "Database Management (MySQL)",
    issuer: "IT Academy",
    date: "2025",
    type: "Certification",
    icon: <Award className="w-8 h-8 text-emerald-500" />
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="bg-black text-white py-40 px-10 md:px-20 relative overflow-hidden">
      
      {/* Background Polish */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Massive Header - Exact match to Journey & Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <p className="text-gray-500 uppercase tracking-[0.6em] text-sm font-black mb-8">
            Verified
          </p>
          <h2 className="text-[80px] md:text-[150px] lg:text-[180px] font-[900] text-white tracking-tighter leading-[0.75] uppercase">
            SKILLS & <br /> 
            <span className="text-sky-400">CREDENTIALS.</span>
          </h2>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {credentials.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-sky-500/30 transition-all duration-500 flex flex-col justify-between h-[400px]"
            >
              <div className="flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-sky-500/10 transition-colors">
                  {cert.icon}
                </div>
                <span className="text-gray-600 font-black text-xl">{cert.id}</span>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-sky-500 mb-2">
                  {cert.type}
                </p>
                <h4 className="text-3xl font-black tracking-tighter mb-4 group-hover:text-white transition-colors leading-none">
                  {cert.title}
                </h4>
                <div className="flex justify-between items-end border-t border-white/5 pt-6 mt-6">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{cert.issuer}</p>
                    <p className="text-[10px] text-gray-600 font-mono mt-1">{cert.date}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-700 group-hover:text-sky-400 cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;