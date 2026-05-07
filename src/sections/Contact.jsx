import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col h-full justify-between gap-10"
        >
          <div>
            <h2 className="text- gray-500 uppercase tracking-[0.3em] text-xs mb-8">Let's Connect</h2>
            <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-10">
              BUILDING <br /> THE FUTURE<br /> <span className="text-sky-400">TOGETHER.</span>
            </h3>
          </div>
          
          <div className="flex flex-col gap-6 text-gray-400 mt-auto">
            <p className="max-w-md">Whether you need a full-stack Laravel system or a modern SaaS UI, I am ready to collaborate. Tell me about your next big idea.</p>
            <a href="mailto:praveen.dev@email.com" className="flex items-center gap-3 text-2xl font-bold text-white hover:text-purple-400 transition-colors">
              <Mail className="w-7 h-7 text-sky-500" />
              praveen.dev@email.com
            </a>
          </div>
        </motion.div>

        {/* Right Side: Replicating the "Services/Project" list feel */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col border-t border-white/10"
        >
          {/* Numbered Field 01 - Name */}
          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] py-10 border-b border-white/10 group gap-4">
            <span className="text-xl font-bold text-gray-600 group-focus-within:text-sky-500 transition-colors">01</span>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Your Full Name</label>
              <input 
                type="text" 
                placeholder="Ex. John Doe" 
                className="bg-transparent border-none text-2xl md:text-3xl font-bold text-white placeholder:text-white/10 outline-none w-full p-0"
              />
            </div>
          </div>

          {/* Numbered Field 02 - Email */}
          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] py-10 border-b border-white/10 group gap-4">
            <span className="text-xl font-bold text-gray-600 group-focus-within:text-sky-500 transition-colors">02</span>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Business Email</label>
              <input 
                type="email" 
                placeholder="Ex. info@project.com" 
                className="bg-transparent border-none text-2xl md:text-3xl font-bold text-white placeholder:text-white/10 outline-none w-full p-0"
              />
            </div>
          </div>

          {/* Numbered Field 03 - Message */}
          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] py-10 border-b border-white/10 group gap-4">
            <span className="text-xl font-bold text-gray-600 group-focus-within:text-sky-500 transition-colors">03</span>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Project Details</label>
              <textarea 
                rows="2"
                placeholder="Tell me what you envision..." 
                className="bg-transparent border-none text-xl md:text-2xl font-medium text-white placeholder:text-white/10 outline-none w-full p-0 resize-none overflow-hidden"
              />
            </div>
          </div>

          {/* New CTA Button - Gradient like your Hero button */}
          <div className="flex justify-end pt-16">
            <button className="flex gap-3 items-center px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-bold text-sm tracking-widest uppercase shadow-lg shadow-purple-500/20 group hover:scale-105 transition-all">
              Send Request
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.form>
      </div>

      {/* Footer is now integrated */}
      <footer className="mt-32 pt-10 border-t border-white/10 text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold flex justify-between gap-6 max-w-7xl mx-auto z-10 relative">
        <p>© 2026 PRAVEEN SHAYAMAL / IT STUDENT / DEVELOPER</p>
        <div className="flex gap-8">
          <span>LinkedIn</span>
          <span>GitHub</span>
          <span>Fiverr</span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;