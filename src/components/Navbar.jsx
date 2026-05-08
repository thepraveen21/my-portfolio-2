import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-black/10 backdrop-blur-md"
    >
      {/* Your Logo/Initial */}
      <div className="text-white font-bold text-xl tracking-tighter">
        PS<span className="text-purple-500">.</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-10 text-xs font-medium tracking-[0.2em] text-gray-300">
        <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
        <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
        <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
        <a href="#journey" className="hover:text-white transition-colors">JOURNEY</a>
        <a href="#certificates" className="hover:text-white transition-colors">CREDENTIALS</a>
        
        <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
      </div>

      {/* Small "Let's Talk" button like the video */}
      <div className="text-xs font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer">
        LET'S TALK
      </div>
    </motion.nav>
  );
};

export default Navbar;