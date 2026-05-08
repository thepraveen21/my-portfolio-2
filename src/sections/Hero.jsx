import { motion } from "framer-motion";

const Hero = () => {
  return (
    // "items-center text-center" makes it look like the video layout
    <section className="h-screen flex flex-col justify-center items-center text-center bg-black px-4">
      
      {/* 1. Small Sub-header */}
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 25 }}
        className="text-gray-400 uppercase tracking-[0.3em] text-xs mb-6"
      >
        Software Developer & IT Student
      </motion.p>

      {/* 2. Massive Title (The "Alex" Style) */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 80, damping: 20 }}
        className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none"
      >
        HI, I'M <br />
        <motion.span 
          className="text-white block"
          whileHover={{ scale: 1.05, rotateZ: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          PRAVEEN
        </motion.span>
      </motion.h1>

      {/* 3. Gradient Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100, damping: 25 }}
        whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(168, 85, 247, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-bold text-sm tracking-widest uppercase shadow-lg shadow-purple-500/20 transition-all"
      >
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Contact Me
        </motion.div>
      </motion.button>

      {/* 4. Background Glow (The "Neon" sky blue vibe) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full -z-10"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Hero;