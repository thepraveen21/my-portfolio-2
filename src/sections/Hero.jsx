import { motion } from "framer-motion";

const Hero = () => {
  return (
    // "items-center text-center" makes it look like the video layout
    <section className="h-screen flex flex-col justify-center items-center text-center bg-black px-4">
      
      {/* 1. Small Sub-header */}
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-400 uppercase tracking-[0.3em] text-xs mb-6"
      >
        Software Developer & IT Student
      </motion.p>

      {/* 2. Massive Title (The "Alex" Style) */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none"
      >
        HI, I'M <br />
        <span className="text-white">PRAVEEN</span>
      </motion.h1>

      {/* 3. Gradient Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        className="mt-12 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-bold text-sm tracking-widest uppercase shadow-lg shadow-purple-500/20"
      >
        Contact Me
      </motion.button>

      {/* 4. Background Glow (The "Neon" sky blue vibe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Hero;