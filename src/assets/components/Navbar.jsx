import { Link, useLocation } from "react-router-dom"; // Added useLocation
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

// Ensure your folder name and extension match exactly
import logo from "../imges/logo.JPG"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Products", path: "/spare-parts" },
  ];

  // Function to handle scroll to top
  const handleNavLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use "auto" for instant jump, "smooth" for scrolling
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b-2 border-red-600/30 text-white transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-3 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <Link 
          to="/" 
          onClick={handleNavLinkClick} 
          className="flex items-center gap-3 md:gap-5 group z-50"
        >
          <div
            className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-white rounded-full border-[3px] border-red-600 overflow-hidden shadow-none"
          >
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
                Cycle Parts MFG.
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
              <Link 
                to={item.path} 
                onClick={handleNavLinkClick}
                className={`hover:text-red-500 transition-colors py-2 ${pathname === item.path ? 'text-red-500' : ''}`}
              >
                {item.name}
              </Link>
              {/* Bottom underline animation */}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-300 ${pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex items-center">
          <Link 
            to="/contact" 
            onClick={handleNavLinkClick}
            className="group flex items-center gap-3 bg-red-600 px-6 py-3 transform skew-x-[-15deg] border-2 border-red-600 hover:bg-white transition-all duration-300"
          >
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
                    <Link 
                      onClick={handleNavLinkClick} 
                      to={item.path} 
                      className={`hover:text-red-600 ${pathname === item.path ? 'text-red-600' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                
                <li className="mt-10">
                   <Link 
                    onClick={handleNavLinkClick}
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