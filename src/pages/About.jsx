import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import {
  GiCarWheel,
  GiFactory,
  GiCheckMark,
  GiTruck,
  GiWorld,
  GiShieldReflect,
  GiSettingsKnobs,
  GiGearHammer
} from "react-icons/gi";

const About = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    { name: "EVA Tyres", path: "/products/spare-parts" },
    { name: "Chain Covers", path: "/products/spare-parts" },
    { name: "Mudguards", path: "/products/spare-parts" },
    { name: "Baskets", path: "/products/spare-parts" },
    { name: "Safety Guards", path: "/products/spare-parts" },
    { name: "Water Bottles", path: "/products/spare-parts" },
    { name: "Complete Spare Range", path: "/products/spare-parts" },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-red-600/30 font-sans">
      {/* GLOBAL STYLES FOR ANIMATION */}
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fade-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .bg-grid-pattern { background-image: radial-gradient(circle, #333 1px, transparent 1px); background-size: 40px 40px; }
      `}</style>

      {/* 1. HERO HEADER - CLEARING NAVBAR */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-grid-pattern overflow-hidden pt-32 md:pt-40">
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0" />
        
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} border-2 border-red-600 pt-12 pb-10 px-6 md:pt-20 md:pb-16 md:px-32 mb-10 max-w-4xl w-full relative z-10 bg-black/40 backdrop-blur-md`}>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-1.5 text-[10px] md:text-sm tracking-[0.4em] uppercase font-black whitespace-nowrap shadow-xl">
            Cycle Parts MFG.|EST.1996
          </span>
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter uppercase leading-none drop-shadow-2xl">
            LAMSON
          </h1>
          <p className="text-xl md:text-4xl tracking-[0.4em] md:tracking-[0.8em] uppercase text-red-600 mt-6 font-bold">
            INDUSTRIES
          </p>
        </div>

        <div className="relative z-10">
            <p className="max-w-3xl mx-auto text-zinc-300 text-sm md:text-xl leading-relaxed tracking-wide font-medium px-4 mb-8">
              Operating at the intersection of <span className="text-white">heritage craftsmanship</span> and <span className="text-white">modern automation</span> to power the global cycling industry.
            </p>
            <button 
              onClick={() => navigate("/contact")}
              className="bg-red-600 text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl active:scale-95"
            >
              Partner With Us
            </button>
        </div>
      </section>

      {/* 2. EXECUTIVE INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-1 hidden md:flex h-full items-center">
             <div className="w-[2px] h-full bg-gradient-to-b from-red-600 to-transparent" />
          </div>
          
          <div className="md:col-span-11 border-l-4 md:border-l-0 border-red-600 pl-6 md:pl-0">
            <h2 className="text-red-600 font-black text-xs md:text-sm uppercase tracking-[0.5em] mb-4">Company Profile</h2>
            <h3 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter italic leading-tight">
              The Industrial Backbone of the <br className="hidden md:block" /> Bicycle Ecosystem
            </h3>
            <p className="text-zinc-200 text-lg md:text-2xl leading-relaxed font-light mb-8">
              Founded in 1996 by the visionary leadership of <span className="text-white font-bold">Mr. Sanjeev Lamba</span> and <span className="text-white font-bold">Mr. Rajeev Lamba</span>, Lamson Industries has transitioned from a precision-focused workshop into the definitive backbone of the global bicycle manufacturing sector.
            </p>
            <p className="text-zinc-400 text-base md:text-xl leading-relaxed font-light">
              We serve as a critical OEM partner to the world’s leading bicycle brands. Our reputation is built on an uncompromising <span className="text-red-600 font-bold italic">"Quality-First"</span> philosophy, where every component is engineered to withstand the rigors of global scaling. At Lamson, we don’t just manufacture parts; we forge the mechanical trust that keeps millions of wheels in motion.
            </p>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION - COMPANY VIEWPOINT */}
      <section className="bg-zinc-950/50 py-24 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div className="group border-2 border-zinc-800 p-10 md:p-16 hover:border-red-600 transition-all duration-700 bg-black relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-red-600 font-black mb-6 uppercase tracking-widest text-2xl">Our Vision</h4>
                  <p className="text-zinc-200 text-lg md:text-xl leading-relaxed font-medium group-hover:text-white transition-colors">
                      To redefine the global bicycle component landscape through the synergy of <span className="text-white border-b border-red-600">sustainable engineering</span> and unrivaled manufacturing excellence.
                  </p>
                </div>
                <GiWorld className="absolute -bottom-10 -right-10 text-9xl text-white/5 group-hover:text-red-600/20 transition-all duration-700" />
            </div>
            
            <div className="group border-2 border-zinc-800 p-10 md:p-16 hover:border-red-600 transition-all duration-700 bg-black relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-red-600 font-black mb-6 uppercase tracking-widest text-2xl">Our Mission</h4>
                  <p className="text-zinc-200 text-lg md:text-xl leading-relaxed font-medium group-hover:text-white transition-colors">
                      Empowering bicycle brands with process-driven manufacturing and a <span className="text-white border-b border-red-600">zero-defect</span> delivery philosophy across domestic and international markets.
                  </p>
                </div>
                <GiSettingsKnobs className="absolute -bottom-10 -right-10 text-9xl text-white/5 group-hover:text-red-600/20 transition-all duration-700" />
            </div>
        </div>
      </section>

      {/* 4. THE INFRASTRUCTURE ADVANTAGE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="group">
            <GiFactory className="text-6xl text-red-600 mx-auto mb-8 group-hover:scale-110 transition-all" />
            <h4 className="text-2xl font-black uppercase mb-4 text-white">Modern Facility</h4>
            <p className="text-zinc-500 text-base">In-house dye and mold design units equipped with <span className="text-white font-bold">automated precision machinery</span> for high-volume output.</p>
          </div>
          <div className="group">
            <GiShieldReflect className="text-6xl text-red-600 mx-auto mb-8 group-hover:scale-110 transition-all" />
            <h4 className="text-2xl font-black uppercase mb-4 text-white">Reliability Matrix</h4>
            <p className="text-zinc-500 text-base">A multi-stage quality validation process ensuring that every SKU meets <span className="text-white font-bold">international safety standards</span>.</p>
          </div>
          <div className="group">
            <GiTruck className="text-6xl text-red-600 mx-auto mb-8 group-hover:scale-110 transition-all" />
            <h4 className="text-2xl font-black uppercase mb-4 text-white">Global Reach</h4>
            <p className="text-zinc-500 text-base">Direct-to-OEM logistics network that facilitates seamless supply chain integration across <span className="text-white font-bold">15+ countries</span>.</p>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT SPECIALTIES */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-grid-pattern relative">
        <div className="absolute inset-0 bg-black/80 z-0" />
        <div className="relative z-10">
          <h3 className="text-center text-red-600 uppercase tracking-[0.8em] text-sm md:text-xl mb-24 font-black">THE CORE CATALOG</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item, idx) => (
              <div
                key={idx}
                onClick={() => navigate(item.path)}
                className="group border-2 border-zinc-800 p-10 hover:border-red-600 transition-all duration-500 cursor-pointer bg-zinc-900/40 relative overflow-hidden min-h-[200px] flex flex-col justify-center"
              >
                <h4 className="font-black uppercase text-2xl tracking-tighter relative z-10 group-hover:text-red-500 transition-colors">
                  {item.name}
                </h4>
                <div className="w-12 h-1.5 bg-red-600 mt-4 group-hover:w-full transition-all duration-700"></div>
                <GiCarWheel className="absolute -bottom-6 -right-6 text-7xl text-zinc-800 group-hover:text-red-600/20 group-hover:scale-150 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="bg-red-600 py-32 text-center relative overflow-hidden group">
        <GiCarWheel className="absolute text-[400px] md:text-[700px] text-black/10 -top-20 -left-20 animate-spin-slow pointer-events-none" />
        <div className="relative z-10 px-6">
          <h2 className="text-6xl md:text-9xl font-black uppercase italic mb-12 leading-[0.8] tracking-tighter text-white">
            LET'S FORGE <br /> THE FUTURE
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-12 py-5 md:px-24 md:py-8 text-lg md:text-2xl font-black uppercase hover:bg-white hover:text-black transition-all shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            BECOME A PARTNER
          </button>
          <p className="mt-8 text-black/60 font-black uppercase tracking-[0.4em] text-xs md:text-sm">
            “Lamson INDUSTRIES – SINCE 1996”
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;