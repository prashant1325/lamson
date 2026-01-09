import React from "react";
import { useNavigate } from "react-router-dom";

// Icons
import {
  GiCarWheel,
  GiFactory,
  GiCheckMark,
  GiTruck,
} from "react-icons/gi";

const About = () => {
  const navigate = useNavigate();

  const products = [
    { name: "EVA Tyres ", path: "/products/spare-parts" },
    { name: "Chain Covers", path: "/products/spare-parts" },
    { name: "Mudguards", path: "/products/spare-parts" },
    { name: "Baskets", path: "/products/spare-parts" },
    { name: "Safe Guards", path: "/products/spare-parts" },
    { name: "Bottles", path: "/products/spare-parts" },
    { name: "Complete Spare Range", path: "/products/spare-parts" },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden pt-16 md:pt-20">
      {/* GLOBAL STYLES */}
      <style>{`
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .hero-parallax {
          background-attachment: fixed;
        }
        @media (max-width: 768px) {
          .hero-parallax {
            background-attachment: scroll;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=2070')] bg-cover bg-center opacity-30 grayscale hero-parallax"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs md:text-sm block mb-4 animate-pulse">
            Established 1996
          </span>

          <h1 className="text-5xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.9] mb-6">
            Industrial <br />
            <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              Authority
            </span>
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-xl uppercase tracking-widest font-light">
            Architecting the backbone of India's bicycle ecosystem for{" "}
            <span className="text-white font-bold">30 years</span>.
          </p>
        </div>
      </section>

      {/* LEGACY SECTION - FIXED MOBILE VIEW & IMAGE STYLE */}
      <section className="py-12 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="animate-fade-in-right">
            {/* Red accent line + Title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-red-600"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                The Legacy
              </h2>
            </div>

            <div className="space-y-8">
              {/* Founder names with red underlines exactly like image */}
              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light">
                Founded by{" "}
                <span className="text-white font-extrabold border-b-4 border-red-600 inline-block mb-1">
                  Mr. Sanjeev Lamba
                </span>{" "}
                and{" "}
                <span className="text-white font-extrabold border-b-4 border-red-600 inline-block">
                  Mr. Rajeev Lamba
                </span>.
              </p>

              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                Lamson bridges high-volume manufacturing with uncompromising
                precision as a trusted <span className="text-red-600 font-bold italic">OEM partner</span>.
              </p>

              {/* Quote Block */}
              <div className="border-l-4 border-red-600 bg-zinc-900/50 p-6">
                 <p className="text-zinc-200 italic text-lg md:text-xl">
                    "We don’t just supply parts; we engineer confidence."
                 </p>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-0">
            <div className="bg-zinc-900 p-8 border-b-8 border-red-600">
              <h3 className="text-5xl md:text-7xl font-black italic">30+</h3>
              <p className="text-zinc-500 uppercase text-xs mt-4 font-bold tracking-widest">
                Years of Excellence
              </p>
            </div>
            <div className="bg-zinc-900 p-8 border-b-8 border-white">
              <h3 className="text-5xl md:text-7xl font-black text-red-600 italic">OEM</h3>
              <p className="text-zinc-500 uppercase text-xs mt-4 font-bold tracking-widest">
                Partner of Choice
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[ 
            { icon: <GiFactory />, title: "High-Volume OEM", text: "Optimized for mass production" },
            { icon: <GiCheckMark />, title: "Precision QA", text: "Rigorous quality assurance" },
            { icon: <GiTruck />, title: "Pan-India Logistics", text: "Nationwide supply chain" },
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-zinc-900 border border-zinc-800 group-hover:border-red-600 transition-all">
                <span className="text-4xl text-red-600">{item.icon}</span>
              </div>
              <h4 className="text-xl md:text-2xl font-black uppercase mb-2 tracking-tighter">{item.title}</h4>
              <p className="text-zinc-500 text-sm uppercase tracking-widest">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate(item.path)}
              className="group bg-zinc-900 p-8 border border-zinc-800 hover:border-red-600 cursor-pointer relative h-48 md:h-64 transition-all"
            >
              <GiCarWheel className="absolute bottom-4 right-4 text-5xl text-zinc-800 group-hover:text-red-600/20 group-hover:scale-[3] transition-all duration-700" />
              <h4 className="font-black uppercase text-xl md:text-2xl relative z-10 leading-tight tracking-tighter">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-20 text-center relative overflow-hidden">
        <GiCarWheel className="absolute text-[300px] md:text-[400px] opacity-10 -top-20 -left-20 animate-spin-slow" />
        <div className="relative z-10 px-6">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-10 leading-[0.8] tracking-tighter">
            Let's Build Together
            </h2>
            <button
              onClick={() => navigate("/contact")}
              className="bg-black text-white px-10 md:px-16 py-4 md:py-6 font-black uppercase hover:bg-white hover:text-black transition-all active:scale-95"
            >
              Contact OEM Division
            </button>
        </div>
      </section>
    </div>
  );
};

export default About;