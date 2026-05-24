import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollPos < prevScrollPos) {
        setIsVisible(true); // Scrolling up
      } else {
        setIsVisible(false); // Scrolling down
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-black/10 backdrop-blur-md h-20 overflow-hidden"
    >
      {/* Your Logo/Initial */}
      <motion.div 
        className="h-20 w-20"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img 
          src={logo} 
          alt="Logo" 
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-10 text-xs font-medium tracking-[0.2em] text-gray-300">
        <motion.a 
          href="#about" 
          onClick={handleNavClick}
          className="hover:text-white transition-colors cursor-pointer"
          whileHover={{ color: "#0ea5e9", scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          ABOUT
        </motion.a>
        <motion.a 
          href="#services" 
          onClick={handleNavClick}
          className="hover:text-white transition-colors cursor-pointer"
          whileHover={{ color: "#0ea5e9", scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          SERVICES
        </motion.a>
        <motion.a 
          href="#projects" 
          onClick={handleNavClick}
          className="hover:text-white transition-colors cursor-pointer"
          whileHover={{ color: "#0ea5e9", scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          PROJECTS
        </motion.a>
        <motion.a 
          href="#journey" 
          onClick={handleNavClick}
          className="hover:text-white transition-colors cursor-pointer"
          whileHover={{ color: "#0ea5e9", scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          JOURNEY
        </motion.a>
        <motion.a 
          href="#certificates" 
          onClick={handleNavClick}
          className="hover:text-white transition-colors cursor-pointer"
          whileHover={{ color: "#0ea5e9", scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          CREDENTIALS
        </motion.a>
        
        <motion.a 
          href="#contact" 
          onClick={handleNavClick}
          className="hover:text-white transition-colors cursor-pointer"
          whileHover={{ color: "#0ea5e9", scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          CONTACT
        </motion.a>
      </div>

      {/* Small "Let's Talk" button like the video */}
      <motion.div 
        onClick={() => {
          const element = document.getElementById("contact");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        className="text-xs font-bold text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        LET'S TALK
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;