import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t-2 border-red-600 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-black italic tracking-tighter">
            LAM<span className="text-red-600">SON</span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Premium quality cycles and accessories for professional riders and enthusiasts.
            Ride with power, ride with style.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:text-red-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-zinc-800 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-zinc-400 text-sm">
            {[
              "Home",
              "About",
              "Contact Us",
             
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
              >
                <ChevronRight
                  size={14}
                  className="text-red-600 group-hover:translate-x-1 transition-transform"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-zinc-800 pb-2">
            Support
          </h3>
          <div className="space-y-4 text-zinc-400 text-sm">
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-red-600 shrink-0" />
              <div>
                <a href="tel:+917889257767" className="block hover:text-white">
                  +91 78892 57767
                </a>
                <a href="tel:+916239346047" className="block hover:text-white">
                  +91 62393 46047
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MessageCircle size={18} className="text-red-600" />
              <a href="https://wa.me/919988547976" className="hover:text-white">
                +91 99885 47976
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-red-600" />
              <span>support@LAMSON.com</span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-zinc-800 pb-2">
            Visit Us
          </h3>
          <p className="text-zinc-400 text-sm mb-4">
            Visit our experience center to test ride your dream cycle.
          </p>
          <a
            href="https://maps.app.goo.gl/4To9d2Xaigq7eRRAA"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-4 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            <MapPin size={14} /> Get Directions
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs">
        <p>© 2026 LAMSON. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">
            TERMS OF SERVICE
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            SHIPPING POLICY
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
