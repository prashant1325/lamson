import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, ArrowRight, Clock } from 'lucide-react';

const Contact = () => {
  // Animation settings for a coordinated entrance
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pb-20 pt-28 md:pt-48 font-sans overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
          className="border-l-4 border-red-600 pl-6 md:pl-8 mb-12 md:mb-16"
        >
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            GET IN <br />
            <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">TOUCH</span>
          </h2>
          <div className="flex items-center gap-3 mt-4">
             <div className="h-[2px] w-8 bg-red-600"></div>
             <p className="text-zinc-500 text-xs md:text-lg font-black tracking-[0.3em] uppercase italic">
               High Performance Support
             </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Main Hero Contact Card */}
          <motion.div 
            custom={1} initial="hidden" animate="visible" variants={fadeIn}
            className="col-span-1 md:col-span-2 bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center group hover:border-red-600/50 transition-all duration-500 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Phone size={250} />
            </div>

            <div className="text-center md:text-left w-full lg:w-auto relative z-10">
              <p className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4">Industrial Sales Line</p>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter text-white group-hover:text-red-500 transition-colors duration-300">
                +91 78892 57767
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-zinc-500 font-bold uppercase text-[10px] md:text-sm">
                <Clock size={14} className="text-red-600" />
                Available 9:00 AM - 8:00 PM
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 lg:mt-0 w-full lg:w-auto relative z-10">
              <a href="tel:+917889257767" className="bg-red-600 text-white px-10 py-5 font-black hover:bg-white hover:text-black transition-all uppercase text-xs md:text-sm text-center md:-skew-x-12 shadow-xl active:scale-95">
                <span className="inline-block md:skew-x-12">Call Now</span>
              </a>
              <a href="https://wa.me/917889257767" className="border-2 border-white text-white px-10 py-5 font-black hover:bg-white hover:text-black transition-all uppercase text-xs md:text-sm flex items-center justify-center gap-2 md:-skew-x-12 active:scale-95">
                <span className="inline-block md:skew-x-12 flex items-center gap-2">
                   <MessageCircle size={18} /> WhatsApp
                </span>
              </a>
            </div>
          </motion.div>

          {/* Secondary WhatsApp Card */}
          <motion.div 
            custom={2} initial="hidden" animate="visible" variants={fadeIn}
            className="group bg-zinc-900/30 border border-white/5 p-8 hover:bg-zinc-800/50 transition-all cursor-pointer"
            onClick={() => window.location.href = "https://wa.me/919988547976"}
          >
            <div className="flex justify-between items-start mb-8">
              <MessageCircle className="text-red-600 group-hover:scale-110 transition-transform" size={40} />
              <ArrowRight className="text-zinc-700 group-hover:text-red-600 transition-colors" />
            </div>
            <p className="text-zinc-500 uppercase text-[10px] font-black tracking-[0.2em]">Bulk Queries</p>
            <span className="text-xl md:text-2xl font-black block mt-2 group-hover:text-red-500 transition-colors">
              +91 99885 47976
            </span>
          </motion.div>

          {/* Secondary Call Card */}
          <motion.div 
            custom={3} initial="hidden" animate="visible" variants={fadeIn}
            className="group bg-zinc-900/30 border border-white/5 p-8 hover:bg-zinc-800/50 transition-all cursor-pointer"
            onClick={() => window.location.href = "tel:+916239346047"}
          >
            <div className="flex justify-between items-start mb-8">
              <Phone className="text-red-600 group-hover:scale-110 transition-transform" size={40} />
              <ArrowRight className="text-zinc-700 group-hover:text-red-600 transition-colors" />
            </div>
            <p className="text-zinc-500 uppercase text-[10px] font-black tracking-[0.2em]">Technical Support</p>
            <span className="text-xl md:text-2xl font-black block mt-2 group-hover:text-red-500 transition-colors">
              62393 46047
            </span>
          </motion.div>

          {/* High Visibility Email Card */}
          <motion.div 
            custom={4} initial="hidden" animate="visible" variants={fadeIn}
            className="bg-zinc-900/30 border border-white/5 p-8 flex items-center justify-between group overflow-hidden hover:border-red-600/30 transition-all"
          >
            <div className="flex items-center gap-5">
              <div className="p-4 bg-red-600/10 rounded-full group-hover:bg-red-600 transition-all duration-500">
                <Mail className="text-red-600 group-hover:text-white" size={24} />
              </div>
              <div>
                <p className="text-zinc-500 uppercase text-[10px] font-black tracking-[0.2em]">Official Mail</p>
                <a href="mailto:support@lamson.com" className="font-black text-lg md:text-xl tracking-tight block hover:text-red-500 transition-colors">
                  support@lamson.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location / Google Maps Card */}
          <motion.a 
            href="https://maps.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            custom={5} initial="hidden" animate="visible" variants={fadeIn}
            className="bg-red-600 p-8 flex items-center justify-between hover:bg-white group transition-all duration-500 cursor-pointer overflow-hidden"
          >
            <div className="flex items-center gap-5">
              <div className="bg-black/10 p-3 md:-skew-x-12 group-hover:bg-red-600 transition-colors">
                <MapPin size={28} className="group-hover:text-white transition-colors" />
              </div>
              <div>
                 <p className="text-black/60 uppercase text-[10px] font-black tracking-[0.2em]">Factory Location</p>
                 <span className="font-black uppercase tracking-widest text-lg md:text-xl group-hover:text-black transition-colors">
                   Find the Garage
                 </span>
              </div>
            </div>
            <ArrowRight className="group-hover:translate-x-3 transition-transform text-black" size={28} />
          </motion.a>

        </div>

        {/* Closing Footer Text */}
        <motion.p 
          custom={6} initial="hidden" animate="visible" variants={fadeIn}
          className="text-center mt-20 text-zinc-700 font-black uppercase tracking-[0.5em] text-[10px]"
        >
          © Lamson Manufacturing Co. // Quality Spares Since 1996
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;