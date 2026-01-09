import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  // Animation settings
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    // Responsive padding-top: pt-24 for mobile, pt-48 for desktop
    <div className="min-h-screen bg-black text-white px-6 pb-20 pt-28 md:pt-48 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
          className="border-l-4 border-red-600 pl-6 md:pl-8 mb-12 md:mb-16"
        >
          {/* Responsive font size: text-5xl on mobile, text-7xl on desktop */}
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            GET IN <br />
            <span className="text-red-600">TOUCH</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-sm md:text-xl font-bold tracking-widest uppercase italic">
            // High Performance Support 24/7
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Main Contact Card */}
          <motion.div 
            custom={1} initial="hidden" animate="visible" variants={fadeIn}
            className="col-span-1 md:col-span-2 bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center group hover:border-red-600 transition-all duration-500"
          >
            <div className="text-center md:text-left w-full md:w-auto">
              <p className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3">Primary Line</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tighter text-white group-hover:text-red-500 transition-colors">
                +91 78892 57767
              </h3>
              <p className="text-zinc-500 font-bold mt-2 uppercase text-[10px] md:text-sm">Official Call & WhatsApp Support</p>
            </div>
            
            {/* Action Buttons: Stack on small mobile, row on tablet/desktop */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0 w-full md:w-auto">
              <a href="tel:+917889257767" className="bg-red-600 text-white px-8 md:px-10 py-4 font-black hover:bg-white hover:text-black transition-all uppercase text-xs md:text-sm text-center md:skew-x-[-10deg]">
                <span className="inline-block md:skew-x-[10deg]">Call Now</span>
              </a>
              <a href="https://wa.me/917889257767" className="border-2 border-white text-white px-8 md:px-10 py-4 font-black hover:bg-white hover:text-black transition-all uppercase text-xs md:text-sm flex items-center justify-center gap-2 md:skew-x-[-10deg]">
                <span className="inline-block md:skew-x-[10deg] flex items-center gap-2">
                   <MessageCircle size={18} /> WhatsApp
                </span>
              </a>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div 
            custom={2} initial="hidden" animate="visible" variants={fadeIn}
            className="bg-zinc-900/30 border border-white/5 p-6 md:p-8 hover:bg-zinc-800/50 transition-all"
          >
            <MessageCircle className="text-red-600 mb-4 md:mb-6" size={32} />
            <p className="text-zinc-500 uppercase text-[10px] font-black tracking-[0.2em]">Quick Connect</p>
            <a href="https://wa.me/919988547976" className="text-xl md:text-2xl font-black block mt-2 hover:text-red-500 transition-colors">
              +91 99885 47976
            </a>
          </motion.div>

          {/* Call Card */}
          <motion.div 
            custom={3} initial="hidden" animate="visible" variants={fadeIn}
            className="bg-zinc-900/30 border border-white/5 p-6 md:p-8 hover:bg-zinc-800/50 transition-all"
          >
            <Phone className="text-red-600 mb-4 md:mb-6" size={32} />
            <p className="text-zinc-500 uppercase text-[10px] font-black tracking-[0.2em]">Direct Line</p>
            <a href="tel:+916239346047" className="text-xl md:text-2xl font-black block mt-2 hover:text-red-500 transition-colors">
              62393 46047
            </a>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            custom={4} initial="hidden" animate="visible" variants={fadeIn}
            className="bg-zinc-900/30 border border-white/5 p-6 md:p-8 flex items-center justify-between group overflow-hidden"
          >
            <div className="flex items-center gap-4 md:gap-5">
              <div className="p-3 bg-red-600/10 rounded-full group-hover:bg-red-600 transition-colors shrink-0">
                <Mail className="text-red-600 group-hover:text-white" size={20} />
              </div>
              <span className="font-black text-sm md:text-lg tracking-tight break-all">support@lamson.com</span>
            </div>
          </motion.div>

          {/* Map Card */}
          <motion.a 
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            custom={5} initial="hidden" animate="visible" variants={fadeIn}
            className="bg-red-600 p-6 md:p-8 flex items-center justify-between hover:bg-white group transition-all cursor-pointer overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <MapPin size={24} className="group-hover:text-red-600 transition-colors shrink-0" />
              <span className="font-black uppercase tracking-widest text-sm md:text-lg group-hover:text-black transition-colors">Find the Garage</span>
            </div>
            <ArrowRight className="group-hover:translate-x-2 group-hover:text-red-600 transition-all shrink-0" />
          </motion.a>

        </div>
      </div>
    </div>
  );
};

export default Contact;