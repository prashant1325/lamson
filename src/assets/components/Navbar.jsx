import { Link } from "react-router-dom";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

// Ensure your folder name and extension match exactly
import logo from "../imges/logo.JPG"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b-2 border-red-600/30 text-white transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-3 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-3 md:gap-5 group z-50">
          <div
            className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-white rounded-full border-[3px] border-red-600 overflow-hidden shadow-none"
          >
            {/* FIX: Increased width to 95% and added sharp image rendering 
               to make the small text inside the JPEG much more visible.
            */}
            <img 
              src={logo} 
              alt="Lamson Logo" 
              className="w-[95%] h-[95%] object-contain scale-110" 
              style={{ imageRendering: 'crisp-edges' }} 
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl font-black tracking-tighter italic uppercase leading-none">
              LAM<span className="text-red-600 group-hover:text-white transition-colors duration-300">SON</span>
            </h1>
           <div className="flex items-center gap-1">
  <span className="text-[9px] md:text-[11px] tracking-[0.2em] text-white font-bold uppercase">
    Cycle Part MFG.
  </span>
  <span className="text-red-600 font-black">|</span>
  <span className="text-[9px] md:text-[11px] tracking-[0.2em] text-red-600 font-bold uppercase">
    EST.1996
  </span>
</div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden lg:flex gap-10 items-center font-bold uppercase text-[13px] tracking-[0.2em]">
          {navLinks.map((item) => (
            <li key={item.name} className="relative group">
              <Link to={item.path} className="hover:text-red-500 transition-colors py-2">
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300" />
            </li>
          ))}

          {/* DROPDOWN */}
          <li 
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center gap-2 uppercase py-2 hover:text-red-600 outline-none">
              Our Products
              <motion.span animate={{ rotate: open ? 180 : 0 }}>▼</motion.span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 pt-6 w-64 z-50"
                >
                  <ul className="bg-zinc-950 border-t-2 border-red-600 shadow-2xl">
                    <li><Link to="/spare-parts" className="block px-8 py-5 hover:bg-red-600 text-white font-bold text-xs">SPARE PARTS</Link></li>
                    <li><Link to="/accessories" className="block px-8 py-5 hover:bg-red-600 text-white font-bold text-xs">ACCESSORIES</Link></li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex items-center">
          <Link to="/contact" className="group flex items-center gap-3 bg-red-600 px-6 py-3 transform skew-x-[-15deg] border-2 border-red-600 hover:bg-white transition-all duration-300">
            <div className="transform skew-x-[15deg] flex items-center gap-3">
              <CgProfile size={24} className="text-white group-hover:text-black" />
              <span className="text-white group-hover:text-black font-black text-xs tracking-[0.15em]">GET IN TOUCH</span>
            </div>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="lg:hidden text-4xl text-red-600 z-50 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* MOBILE SIDEBAR */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 w-full h-screen bg-black z-40 flex flex-col p-10 pt-32 lg:hidden"
            >
              <ul className="flex flex-col gap-8 text-2xl font-black uppercase italic">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link onClick={() => setMenuOpen(false)} to={item.path} className="hover:text-red-600">{item.name}</Link>
                  </li>
                ))}
                <li>
                  <p className="text-zinc-600 text-xs tracking-widest mb-4 italic">PRODUCTS</p>
                  <div className="flex flex-col gap-4 pl-4 border-l-2 border-red-600">
                    <Link onClick={() => setMenuOpen(false)} to="/spare-parts" className="text-lg">Spare Parts</Link>
                    <Link onClick={() => setMenuOpen(false)} to="/accessories" className="text-lg">Accessories</Link>
                  </div>
                </li>
                <li className="mt-10">
                   <Link 
                    onClick={() => setMenuOpen(false)}
                    to="/contact" 
                    className="flex items-center justify-center gap-3 bg-red-600 py-4 text-white text-sm"
                  >
                    <CgProfile size={20} /> GET IN TOUCH
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;