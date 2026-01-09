import React from "react";
import { FaCalendarCheck } from "react-icons/fa";

const ProductCard = ({ name, image }) => {
  return (
    <div className="group relative bg-zinc-950 border border-zinc-800 p-1 rounded-sm transition-all duration-500 hover:border-red-600/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]">
      
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-zinc-900">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-white text-xl font-black uppercase italic tracking-tighter">
            {name}
          </h3>
          <div className="h-1 w-10 bg-red-600 mt-2 transition-all duration-500 group-hover:w-16"></div>
        </div>

        {/* Book Now Button */}
        <button className="w-full flex items-center justify-center gap-3 relative group/btn overflow-hidden border border-red-600 py-3 transition-all duration-300">
          <div className="absolute inset-0 bg-red-600 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 flex items-center gap-2 text-white font-black uppercase italic tracking-widest text-sm">
            <FaCalendarCheck className="text-lg" />
            Book
          </span>
        </button>
      </div>

      {/* Brand Mark */}
      <span className="absolute -bottom-2 -right-2 text-6xl font-black text-white/[0.03] italic pointer-events-none uppercase">
        LAMSON
      </span>
    </div>
  );
};

export default ProductCard;
