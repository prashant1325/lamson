import React from 'react';
import bgImage from '../assets/imges/bg image.webp'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600">
      
      {/* 1. HERO SECTION (UPDATED TO LEFT-ALIGNED) */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-7xl w-full animate-fadeIn">
          <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Engineered for Excellence
          </span>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8] mb-6">
            LAM<span className="text-red-600">SON</span>
          </h1>
          
          <p className="text-gray-400 max-w-lg text-lg md:text-xl leading-relaxed">
            The ultimate destination for professional-grade cycle spares and precision-cut accessories. Built to endure.
          </p>
          
          <div className="mt-10 flex flex-col md:flex-row justify-start gap-6">
            <button className="px-10 py-4 border border-zinc-700 hover:border-red-600 text-white font-bold uppercase tracking-widest transition-all duration-300 hover:bg-red-600 group">
              Our Story <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </button>
            <button className="px-10 py-4 bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
              Browse Products
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Products', value: '500+' },
            { label: 'Happy Riders', value: '10k+' },
            { label: 'Countries', value: '15+' },
            { label: 'Quality Warranty', value: '100%' }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="text-red-600 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE CATEGORIES */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black uppercase italic mb-4">Precision Components</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-1 shadow-2xl">
          <div className="bg-zinc-900 p-10 hover:bg-red-600 transition-all duration-500 group cursor-default">
            <h3 className="text-xl font-bold mb-4 uppercase group-hover:text-white transition-colors">Drivetrain & Gears</h3>
            <ul className="text-gray-400 space-y-2 group-hover:text-red-100 transition-colors text-sm">
              <li>• Ceramic Bearing Pulleys</li>
              <li>• Ultra-Lightweight Cassettes</li>
              <li>• Precision Derailleurs</li>
              <li>• Titanium Chain Links</li>
            </ul>
          </div>

          <div className="bg-zinc-950 p-10 hover:bg-red-600 transition-all duration-500 group cursor-default">
            <h3 className="text-xl font-bold mb-4 uppercase group-hover:text-white transition-colors">Safety & Control</h3>
            <ul className="text-gray-400 space-y-2 group-hover:text-red-100 transition-colors text-sm">
              <li>• Carbon-Fiber Brake Pads</li>
              <li>• Anti-Slip Handlebar Grips</li>
              <li>• Integrated LED Helmets</li>
              <li>• High-Pressure Hydraulics</li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-10 hover:bg-red-600 transition-all duration-500 group cursor-default">
            <h3 className="text-xl font-bold mb-4 uppercase group-hover:text-white transition-colors">Performance Mods</h3>
            <ul className="text-gray-400 space-y-2 group-hover:text-red-100 transition-colors text-sm">
              <li>• Aerodynamic Rim Sets</li>
              <li>• Competition Saddles</li>
              <li>• Telemetry Computers</li>
              <li>• Tubeless Conversion Kits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. WHY LAMSON? */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-600"></div>
            <img 
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800" 
              alt="Cycle parts" 
              className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-black uppercase italic mb-6">Why Choose Lamson?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We don’t just sell parts; we provide the backbone for your journey. Every Lamson product undergoes rigorous stress testing to ensure it survives the harshest terrains.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-2 mt-1"></div>
                <div>
                  <h4 className="font-bold uppercase italic">Military Grade Durability</h4>
                  <p className="text-sm text-gray-500">Materials sourced from the highest aerospace standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-2 mt-1"></div>
                <div>
                  <h4 className="font-bold uppercase italic">24/7 Expert Support</h4>
                  <p className="text-sm text-gray-500">Consult with professional mechanics anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER */}
      <section className="py-20 border-t border-zinc-900 text-center px-6">
        <h2 className="text-3xl font-black uppercase mb-6 tracking-widest">Join the Lamson Crew</h2>
        <p className="text-gray-500 mb-8 uppercase text-xs tracking-[0.4em]">Get early access to limited edition drops</p>
        <div className="flex flex-col md:flex-row max-w-md mx-auto gap-0">
          <input 
            type="email" 
            placeholder="ENTER EMAIL" 
            className="bg-zinc-900 border-none px-6 py-4 w-full focus:ring-2 focus:ring-red-600 outline-none text-white transition-all"
          />
          <button className="bg-red-600 px-8 py-4 font-bold uppercase hover:bg-red-700 transition-colors">Join</button>
        </div>
      </section>
      
    </div>
  );
};

export default Home;