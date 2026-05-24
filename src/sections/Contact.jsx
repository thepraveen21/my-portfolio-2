import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20 px-10 md:px-20 relative overflow-hidden">
      
      {/* Decorative Glow - Neon Sky Blue like your projects */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-sky-600/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        
        {/* Left Side: Text and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true }}
          className="flex flex-col h-full justify-between gap-10"
        >
          <div>
            <motion.h2 
              className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-8"
              whileInView={{ letterSpacing: "0.35em" }}
              transition={{ duration: 0.6 }}
            >
              Let's Connect
            </motion.h2>
            <motion.h3 
              className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10"
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.95 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              BUILDING <br /> THE FUTURE<br /> <span className="text-sky-400">TOGETHER.</span>
            </motion.h3>
          </div>
          
          <motion.div 
            className="flex flex-col gap-6 text-gray-400 mt-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.p 
              className="max-w-md"
              whileHover={{ color: "rgba(209, 213, 219, 1)" }}
              transition={{ duration: 0.3 }}
            >
              Whether you need a full-stack Laravel system or a modern SaaS UI, I am ready to collaborate. Tell me about your next big idea.
            </motion.p>
            <motion.a 
              href="mailto:praveen.dev@email.com" 
              className="flex items-center gap-3 text-2xl font-bold text-white"
              whileHover={{ x: 10, color: "#a78bfa" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Mail className="w-7 h-7 text-sky-500" />
              </motion.div>
              praveen.dev@email.com
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Replicating the "Services/Project" list feel */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true }}
          className="flex flex-col border-t border-white/10"
        >
          {/* Numbered Field 01 - Name */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-[80px_1fr] py-10 border-b border-white/10 group gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
          >
            <motion.span 
              className="text-xl font-bold text-gray-600 group-focus-within:text-sky-500 transition-colors"
              whileHover={{ scale: 1.2, color: "#0ea5e9" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              01
            </motion.span>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Your Full Name</label>
              <input 
                type="text" 
                placeholder="Ex. John Doe" 
                className="bg-transparent border-none text-2xl md:text-3xl font-bold text-white placeholder:text-white/10 outline-none w-full p-0 focus:placeholder:text-white/30 transition-all"
              />
            </div>
          </motion.div>

          {/* Numbered Field 02 - Email */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-[80px_1fr] py-10 border-b border-white/10 group gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
          >
            <motion.span 
              className="text-xl font-bold text-gray-600 group-focus-within:text-sky-500 transition-colors"
              whileHover={{ scale: 1.2, color: "#0ea5e9" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              02
            </motion.span>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Business Email</label>
              <input 
                type="email" 
                placeholder="Ex. info@project.com" 
                className="bg-transparent border-none text-2xl md:text-3xl font-bold text-white placeholder:text-white/10 outline-none w-full p-0 focus:placeholder:text-white/30 transition-all"
              />
            </div>
          </motion.div>

          {/* Numbered Field 03 - Message */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-[80px_1fr] py-10 border-b border-white/10 group gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
          >
            <motion.span 
              className="text-xl font-bold text-gray-600 group-focus-within:text-sky-500 transition-colors"
              whileHover={{ scale: 1.2, color: "#0ea5e9" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              03
            </motion.span>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Project Details</label>
              <textarea 
                rows="2"
                placeholder="Tell me what you envision..." 
                className="bg-transparent border-none text-xl md:text-2xl font-medium text-white placeholder:text-white/10 outline-none w-full p-0 resize-none overflow-hidden focus:placeholder:text-white/30 transition-all"
              />
            </div>
          </motion.div>

          {/* New CTA Button - Gradient like your Hero button */}
          <motion.div 
            className="flex justify-end pt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="flex gap-3 items-center px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-bold text-sm tracking-widest uppercase shadow-lg shadow-purple-500/20 group"
              whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(168, 85, 247, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Send Request
              <motion.div
                whileHover={{ x: 3, rotate: 20 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.form>
      </div>

      {/* Footer is now integrated */}
      <motion.footer 
        className="mt-32 max-w-7xl mx-auto z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Top Footer Section */}
        <div className="pt-10 border-t border-white/10 text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold flex justify-between items-center gap-6 pb-16">
          <div className="flex items-center gap-4">
            <motion.img 
              src={logo} 
              alt="Logo"
              className="h-25 w-25 object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <p>© 2026 PRAVEEN SHAYAMAL / IT STUDENT / DEVELOPER</p>
          </div>
          <div className="flex gap-8">
            <motion.span whileHover={{ color: "#a78bfa", scale: 1.1 }} transition={{ duration: 0.2 }}>LinkedIn</motion.span>
            <motion.span whileHover={{ color: "#a78bfa", scale: 1.1 }} transition={{ duration: 0.2 }}>GitHub</motion.span>
            <motion.span whileHover={{ color: "#a78bfa", scale: 1.1 }} transition={{ duration: 0.2 }}>Fiverr</motion.span>
          </div>
        </div>

        {/* Bottom Footer Section - Multi Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-12 border-t border-white/10">
          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-600">Navigation</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-gray-400">
              <li className="hover:text-sky-400 cursor-pointer transition-colors">Home</li>
              <li className="hover:text-sky-400 cursor-pointer transition-colors">Services</li>
              <li className="hover:text-sky-400 cursor-pointer transition-colors">Projects</li>
            </ul>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-600">Services</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-gray-400">
              <li>Full-Stack Dev</li>
              <li>SaaS UI/UX</li>
              <li>System Logic</li>
            </ul>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-600">Location</h4>
            <p className="text-sm font-medium text-gray-400">Ratnapura, Sri Lanka</p>
            <p className="text-xs text-gray-600 font-mono">06.6828° N, 80.3992° E</p>
          </motion.div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;