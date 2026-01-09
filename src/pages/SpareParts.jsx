import React from "react";
import ProductCard from "../assets/components/ProductCard";

import handBar from "../assets/spare/hand bar.jpg";
import chainWheel from "../assets/spare/chanewheel.jpg";

const SpareParts = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 pt-32 md:pt-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pb-20">

        {/* Page Header */}
        <div className="mb-16">
          <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-2 block animate-pulse">
            Genuine Components
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            Spare <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">Parts</span>
          </h2>
          <div className="h-[2px] w-24 bg-red-600 mt-4 shadow-[0_0_15px_rgba(220,38,38,1)]"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProductCard 
            name="Hand Bar" 
            image={handBar} 
          />

          <ProductCard 
            name="Chain Wheel" 
            image={chainWheel} 
          />

          <ProductCard 
            name="Gear" 
            image={chainWheel} 
          />
        </div>

        {/* Footer */}
        <div className="mt-32 text-center border-t border-zinc-900 pt-10">
          <p className="text-zinc-500 uppercase text-[10px] tracking-[0.6em] font-bold">
            LAMSON • ENGINEERED FOR EXCELLENCE • 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpareParts;
