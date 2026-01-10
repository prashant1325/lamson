import React from "react";
import { useNavigate } from "react-router-dom";

// ✅ Icons
import { GiCarWheel } from "react-icons/gi";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// Asset Imports
import bgImage from "../assets/imges/bg1.jpg";
import prod1 from "../assets/imges/12 Inch EVA Foam Bicycle.jpg";
import prod2 from "../assets/imges/14 Inch Paradise Yellow Eva Tyre.jpg";
import prod3 from "../assets/imges/basket1.jpg";
import prod4 from "../assets/imges/bottle 1.jpg";
import prod5 from "../assets/imges/Chain-Cover 20 inch Lady cycle.jpg";
import prod6 from "../assets/imges/Fender(With Fitting).jpg";
import prod7 from "../assets/imges/Shark-Chain Cover.jpg";
import prod8 from "../assets/imges/bottle 2.jpg";
import prod9 from "../assets/imges/Eva Wheels 12 Inch Bicycle Tyres.jpg";

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    { id: 1, name: "12 Inch EVA Foam", img: prod1 },
    { id: 2, name: "EVA Yellow Tyre", img: prod2 },
    { id: 3, name: "Front Basket", img: prod3 },
    { id: 4, name: " Water Bottle ", img: prod4 },
    { id: 5, name: "Lady Chain Cover", img: prod5 },
    { id: 6, name: "Fender (With Fitting)", img: prod6 },
    { id: 7, name: "Shark-Chain Cover", img: prod7 },
    { id: 8, name: "Sports Bottle", img: prod8 },
    { id: 9, name: "Eva Wheels 12 Inch", img: prod9 },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* GLOBAL ANIMATIONS */}
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slowZoom {
          animation: slowZoom 20s ease-in-out infinite alternate;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .linear-wrapper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-slowZoom"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-20 px-6 md:px-16 max-w-7xl w-full">
          <span className="text-red-600 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm block mb-4 animate-pulse">
            Engineered for Excellence
          </span>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.85] md:leading-[0.8]">
              LAM
              <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                SON
              </span>
            </h1>
            
            <div className="animate-spin-slow w-fit">
              <GiCarWheel
                className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.7)] text-[60px] md:text-[100px]"
              />
            </div>
          </div>

          <p className="text-zinc-400 max-w-lg text-base md:text-lg mt-8 mb-10 leading-relaxed">
            The ultimate destination for professional-grade cycle spares and
            precision-cut accessories.{" "}
            <span className="text-white font-medium">Built to endure.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button
              onClick={() => navigate("/products/spare-parts")}
              className="px-8 md:px-10 py-4 bg-red-600 font-bold uppercase tracking-widest hover:bg-red-700 transition-all active:scale-95 text-center"
            >
              Browse Products
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-8 md:px-10 py-4 border border-zinc-700 hover:border-red-600 uppercase tracking-widest transition-all text-center"
            >
              Our Story →
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-[2px] bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
      </section>

      {/* 2. STATS BAR */}
      <section className="py-12 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years Experience", value: "30+" },
            { label: "Premium Products", value: "100+" },
            { label: "Global Reach", value: "10+" },
            { label: "Quality Checks", value: "100%" },
          ].map((stat, i) => (
            <div key={i} className="group">
              <div className="text-3xl md:text-5xl font-black text-white group-hover:text-red-600 transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRODUCT SLIDER */}
      <section className="py-16 md:py-24">
        <div className="px-6 mb-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic">
            Our <span className="text-red-600">Products</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mt-2"></div>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 15 },
            480: { slidesPerView: 2.2, spaceBetween: 15 },
            768: { slidesPerView: 3.5, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 25 },
          }}
          className="linear-wrapper !px-6"
        >
          {featuredProducts.map((p) => (
            <SwiperSlide key={p.id}>
              <div
                onClick={() => navigate("/products/spare-parts")}
                className="group cursor-pointer bg-zinc-900/40 border border-zinc-800 p-4 hover:border-red-600 transition-all duration-300"
              >
                <div className="bg-white aspect-square flex items-center justify-center rounded overflow-hidden mb-4">
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="object-contain h-3/4 w-3/4 group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <h3 className="text-xs md:text-sm font-bold uppercase truncate group-hover:text-red-600 transition-colors">
                  {p.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 4. HERITAGE / ABOUT SECTION */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-zinc-950">
        <div className="absolute top-0 left-0 text-[12rem] md:text-[20rem] font-black text-zinc-900/10 select-none -translate-x-20 -translate-y-20 italic">
          EST.1998
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm">
                The Lamson Legacy
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mt-4 mb-8 leading-none">
                Innovation in <br /> 
                <span className="text-red-600">Motion.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                For over two decades, <span className="text-white font-bold">LAMSON</span> has been at the forefront of the bicycle spare parts industry. What started as a precision workshop has evolved into a global benchmark for quality.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                We specialize in high-performance materials—from our signature 
                <span className="text-white"> EVA Foam Technology</span> to impact-resistant fenders. Every part is crafted to handle the toughest terrains while maintaining a sleek, professional aesthetic.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 border border-zinc-800 bg-black">
                  <div className="w-10 h-10 shrink-0 bg-red-600/10 border border-red-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-600 rotate-45" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm">Engineering</h4>
                    <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-tighter">Precision laser-cut components.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-zinc-800 bg-black">
                  <div className="w-10 h-10 shrink-0 bg-red-600/10 border border-red-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-600 rotate-45" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm">Reliability</h4>
                    <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-tighter">Tested for 100,000+ rotations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 border border-red-600/30 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
              <div className="relative z-10 overflow-hidden border border-zinc-800">
                <img 
                  src={prod9} 
                  alt="Industrial Engineering" 
                  className="grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
                />
              </div>
              <div className="absolute bottom-6 -right-6 bg-red-600 p-8 hidden lg:block z-20">
                <p className="text-sm font-black uppercase leading-tight">
                  Premium <br /> Industrial <br /> Standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="py-24 bg-red-600 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-8">
            Upgrade Your <br className="hidden md:block" /> Performance
          </h2>
          <p className="text-red-100 text-lg md:text-2xl max-w-2xl mx-auto mb-12">
            Experience the difference that precision engineering makes. Contact our team for bulk orders and technical specifications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => navigate("/contact")}
              className="px-12 py-5 bg-black text-white font-black uppercase tracking-[0.2em] hover:bg-zinc-900 transition-all transform hover:-translate-y-1"
            >
              Get a Quote
            </button>
            <button 
              onClick={() => navigate("/products/spare-parts")}
              className="px-12 py-5 bg-white text-red-600 font-black uppercase tracking-[0.2em] hover:bg-zinc-100 transition-all transform hover:-translate-y-1"
            >
              View Catalog
            </button>
          </div>
        </div>
        {/* Background Decorative Wheel */}
        <GiCarWheel className="absolute -bottom-32 -left-32 text-[40rem] text-red-700/20 rotate-12 pointer-events-none" />
      </section>
    </div>
  );
};

export default Home;