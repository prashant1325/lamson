import { GiCarWheel, GiFactory, GiCheckMark, GiStorkDelivery } from "react-icons/gi";

const About = () => {
  const products = [
    "EVA Tyres (14”, 16”, 20”)", "Chain Covers", "Mudguards", 
    "Baskets", "Safe Guards", "Bottles", "Complete Spare Range"
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Header Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=2070')] bg-cover bg-center opacity-30 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        
        <div className="relative z-10 text-center px-6">
          <span className="text-red-600 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">Since 1996</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black italic tracking-tighter uppercase mt-2 leading-tight">
            Manufacturing <span className="text-red-600">Trust</span>
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm md:text-lg uppercase tracking-widest font-light">
            Powering India's Leading Bicycle Brands for 3 Decades.
          </p>
        </div>
      </section>

      {/* Founders & Story Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-6 border-l-4 border-red-600 pl-6">
            Our Legacy
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-6 text-sm md:text-base">
            Founded by <span className="text-white font-bold text-lg md:text-xl">Mr. Sanjeev Lamba</span> and <span className="text-white font-bold text-lg md:text-xl">Mr. Rajeev Lamba</span>, 
            Lamson was created with a commitment to build high-quality, dependable bicycle parts that meet the demands of large-scale OEM production.
          </p>
          <p className="text-zinc-400 leading-relaxed italic text-sm md:text-base border-t border-zinc-800 pt-4">
            "Nearly three decades of manufacturing expertise, technical know-how, and industry insight delivered to the bicycle ecosystem pan India."
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 p-6 md:p-8 rounded-sm border-b-4 border-red-600">
            <h3 className="text-3xl md:text-4xl font-black text-white">30+</h3>
            <p className="text-zinc-500 uppercase text-[10px] md:text-xs tracking-widest mt-2">Years Experience</p>
          </div>
          <div className="bg-zinc-900 p-6 md:p-8 rounded-sm border-b-4 border-white">
            <h3 className="text-3xl md:text-4xl font-black text-white">OEM</h3>
            <p className="text-zinc-500 uppercase text-[10px] md:text-xs tracking-widest mt-2">Industry Leaders</p>
          </div>
        </div>
      </section>

      {/* Product & Capabilities Grid */}
      <section className="bg-zinc-950 py-16 md:py-24 px-6 md:px-8 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:16 gap-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-none">
              What We <br /> <span className="text-red-600">Specialize In</span>
            </h2>
            <p className="text-zinc-500 max-w-md text-xs md:text-sm uppercase tracking-wider">
              Consistent quality, durability, and performance for large-scale industrial requirements.
            </p>
          </div>

          {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
            {products.map((item, idx) => (
              <div key={idx} className="group bg-zinc-900 p-8 md:p-10 hover:bg-red-600 transition-all duration-500 cursor-default">
                <GiCarWheel className="text-3xl mb-4 text-red-600 group-hover:text-white group-hover:rotate-90 transition-all duration-700" />
                <h4 className="font-bold uppercase tracking-tighter text-base md:text-lg">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="p-8 md:p-12 border border-zinc-800 hover:border-red-600 transition-colors">
          <h3 className="text-xl md:text-2xl font-black uppercase italic mb-4 text-red-600">Our Mission</h3>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            To manufacture high-quality, reliable, and cost-effective bicycle components that empower our OEM partners and contribute to the sustainable growth of the Indian bicycle industry.
          </p>
        </div>
        <div className="p-8 md:p-12 border border-zinc-800 hover:border-white transition-colors">
          <h3 className="text-xl md:text-2xl font-black uppercase italic mb-4">Our Vision</h3>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            To be a benchmark OEM manufacturer in the bicycle components sector, known for quality, consistency, and innovation across India and beyond.
          </p>
        </div>
      </section>

      {/* Trust Commitment CTA */}
      <section className="bg-red-600 py-12 md:py-16 px-6 md:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-4">Ready to Partner with Lamson?</h2>
        <p className="mb-8 uppercase tracking-widest font-bold text-black/80 text-xs md:text-sm">Manufacturing Trust. Powering Cycles.</p>
        <button className="w-full sm:w-auto bg-white text-black px-10 py-4 font-black uppercase hover:bg-black hover:text-white transition-all text-sm md:text-base">
          Contact Our OEM Team
        </button>
      </section>
    </div>
  );
};

export default About;