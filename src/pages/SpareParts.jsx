import React from "react";
import ProductCard from "../assets/components/ProductCard";

// ✅ HOME PAGE & NEW ACCESSORIES
import prod1 from "../assets/imges/12 Inch EVA Foam Bicycle.jpg";
import prod2 from "../assets/imges/14 Inch Paradise Yellow Eva Tyre.jpg";
import prod3 from "../assets/imges/basket1.jpg"; 
import prod4 from "../assets/imges/bottle 1.jpg";
import prod5 from "../assets/imges/Chain-Cover 20 inch Lady cycle.jpg";
import prod6 from "../assets/imges/Fender(With Fitting).jpg";
import prod7 from "../assets/imges/Shark-Chain Cover.jpg";
import prod8 from "../assets/imges/bottle 2.jpg";
import prod9 from "../assets/imges/Eva Wheels 12 Inch Bicycle Tyres.jpg";
import prod10 from "../assets/imges/Sharp-Chain.jpg";
import prod11 from "../assets/imges/Sports (With Fitting).jpg";
import prod12 from "../assets/imges/Lady-Chain cover.jpg";
import prod13 from "../assets/imges/Kids Sport(With Fittnig).jpg";

// New Assets
import kidsBasketBlue from "../assets/imges/Kids Cycle Basket - Blue.jpg";
import kidsBasket2 from "../assets/imges/kids basket 2.jpg";
import bottle4 from "../assets/imges/bottle4.jpg";
import bottleBase from "../assets/imges/bottle.jpg";
// import basket3 from "../assets/imges/basket3.jpg";

// ✅ TECHNICAL SPARES
import handBar from "../assets/spare/hand bar.jpg";
import chainWheel from "../assets/spare/chanewheel.jpg";
import chain from "../assets/spare/chain.jpg";
import free from "../assets/spare/freesheel.jpg";
import tyre from "../assets/spare/tyre.webp";
import tube from "../assets/spare/tube.avif";
import rim from "../assets/spare/rim.jpg";
import spoke from "../assets/spare/spoke.webp";
import hub from "../assets/spare/hub.jpg";
import disk from "../assets/spare/disk.jpg";
import stem from "../assets/spare/stem.jpg";
import gear from "../assets/spare/gearshifter.png";
import breaks from "../assets/spare/break.webp";
import shoes from "../assets/spare/shoes.webp";

const SpareParts = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 pt-32 md:pt-40">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 pb-20">

        {/* Page Header */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-2 block animate-pulse">
            Genuine Components & Accessories
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter">
            PRO <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">CATALOG</span>
          </h2>
          <div className="h-[2px] w-32 bg-red-600 mt-4 mx-auto md:mx-0 shadow-[0_0_15px_rgba(220,38,38,1)]"></div>
        </div>

        {/* SECTION 1: Featured & Accessories */}
        <div className="mb-16">
          <h3 className="text-xl font-bold uppercase tracking-widest mb-8 border-l-4 border-red-600 pl-4">
            Featured Accessories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
            <ProductCard name="Rubber Kids Bicycle Tyre" image={prod1} />
            <ProductCard name="Paradise Yellow Tyre" image={prod2} />
            {/* ✅ FIXED THE TOKEN ERROR BELOW */}
            <ProductCard name="Eva Wheels 12 Inch" image={prod9} />
            <ProductCard name="Front Basket" image={prod3} />
            <ProductCard name="Kids Sport Basket" image={kidsBasket2} />
            <ProductCard name="Blue Kids Basket" image={kidsBasketBlue} />
            {/* <ProductCard name="Premium Mesh Basket" image={basket3} /> */}
            <ProductCard name="Fender Set" image={prod6} />
            <ProductCard name="Sports Fitting" image={prod11} />
            <ProductCard name="Kids Sport Fitting" image={prod13} />
            <ProductCard name="Shark-Chain Cover" image={prod7} />
            <ProductCard name="Lady Chain Cover" image={prod5} />
            <ProductCard name=" 'Sports' Lady-Chain Cover" image={prod12} />
            <ProductCard name="Sharp Chain" image={prod10} />
            <ProductCard name="Sports Bottle" image={bottleBase} />
            <ProductCard name="Sports Bottle V8" image={prod4} />
            <ProductCard name="Sports Bottle GNC" image={prod8} />
            <ProductCard name="Bicycle  Bottle " image={bottle4} />
          </div>
        </div>

        {/* SECTION 2: Technical Spares */}
        <div className="mb-16">
          <h3 className="text-xl font-bold uppercase tracking-widest mb-8 border-l-4 border-zinc-700 pl-4 text-zinc-400">
            Technical Spares
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
            <ProductCard name="Hand Bar" image={handBar} />
            <ProductCard name="Crankset / Chainwheel" image={chainWheel} />
            <ProductCard name="High-Tension Chain" image={chain} />
            <ProductCard name="Freewheel" image={free} />
            <ProductCard name="24 Inch MTB Tyre" image={tyre} />
            <ProductCard name="Bicycle Tube" image={tube} />
            <ProductCard name="Alloy Rim" image={rim} />
            <ProductCard name="Wheel Spoke Set" image={spoke} />
            <ProductCard name="Precision Wheel Hub" image={hub} />
            <ProductCard name="Disc Rotor" image={disk} />
            <ProductCard name="Steering Stem" image={stem} />
            <ProductCard name="Gear Shifter" image={gear} />
            <ProductCard name="Brake Caliper" image={breaks} />
            <ProductCard name="Brake Shoes" image={shoes} />
          </div>
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