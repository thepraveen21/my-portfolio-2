// import { motion } from "framer-motion";
// import { Code, Users, Globe, ArrowUp } from "lucide-react";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-black text-white py-20 px-10 md:px-20 border-t border-white/5 relative overflow-hidden">
      
//       {/* Subtle Background Glow */}
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/5 blur-[120px] rounded-full" />

//       <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
//         {/* Top Row: Brand & Status */}
//         {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
//           <div>
//             <h2 className="text-2xl font-bold tracking-tighter mb-2">
//               PRAVEEN SHAYAMAL<span className="text-sky-500">.</span>
//             </h2>
//             <div className="flex items-center gap-2">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//               </span>
//               <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Available for Freelance</p>
//             </div>
//           </div>

//           <div className="flex gap-8 items-center">
//             <a href="#" className="text-gray-500 hover:text-white transition-colors"><Code size={20} /></a>
//             <a href="#" className="text-gray-500 hover:text-white transition-colors"><Users size={20} /></a>
//             <a href="#" className="text-gray-500 hover:text-white transition-colors"><Globe size={20} /></a>
//           </div>
//         </div> */}

//         {/* Middle Row: Large Links */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-y border-white/5 py-16">
//           <div className="flex flex-col gap-4">
//             <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-600">Navigation</h4>
//             <ul className="flex flex-col gap-2 text-sm font-medium text-gray-400">
//               <li className="hover:text-sky-400 cursor-pointer transition-colors">Home</li>
//               <li className="hover:text-sky-400 cursor-pointer transition-colors">Services</li>
//               <li className="hover:text-sky-400 cursor-pointer transition-colors">Projects</li>
//             </ul>
//           </div>
//           <div className="flex flex-col gap-4">
//             <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-600">Services</h4>
//             <ul className="flex flex-col gap-2 text-sm font-medium text-gray-400">
//               <li>Full-Stack Dev</li>
//               <li>SaaS UI/UX</li>
//               <li>System Logic</li>
//             </ul>
//           </div>
//           <div className="flex flex-col gap-4">
//             <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-600">Location</h4>
//             <p className="text-sm font-medium text-gray-400">Ratnapura, Sri Lanka</p>
//             <p className="text-xs text-gray-600 font-mono">06.6828° N, 80.3992° E</p>
//           </div>
//           <div className="flex flex-col gap-4 items-start md:items-end">
//              <button 
//               onClick={scrollToTop}
//               className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group"
//              >
//               <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
//              </button>
//           </div>
//         </div>

//         {/* Bottom Row: Copyright */}
//         {/* <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
//           <p>© 2026 Designed & Built by Praveen</p>
//           <p>Built with React & Framer Motion</p>
//         </div> */}
//       </div>
//     </footer>
//   );
// };

// export default Footer;