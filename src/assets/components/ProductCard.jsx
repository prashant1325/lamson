import { FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ name, image }) => {
  const phoneNumber = "9988547976"; 
  const message = `Hello, I'm interested in "${name}". Can I get more details?`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group relative bg-[#111111] border border-gray-800 rounded-xl overflow-hidden   flex flex-col items-center text-center 
                    hover:border-red-500 hover:-translate-y-2 
                    hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]">
      
      {/* Image Container - Adjusted h-40 for mobile to fit 2-per-row */}
      <div className="w-full bg-white p-4 sm:p-8 flex justify-center items-center h-40 sm:h-60">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content Area */}
      <div className="p-3 sm:p-6 w-full flex flex-col items-center">
        
        {/* Name: Smaller text on mobile to prevent overflow */}
        <h3 className="text-xs sm:text-lg font-extrabold text-white uppercase tracking-tighter mb-3 sm:mb-5 transition-colors duration-300 group-hover:text-red-500 line-clamp-1">
          {name}
        </h3>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 sm:gap-2 w-full bg-[#25D366] text-black font-bold py-2 sm:py-2.5 rounded-lg transition-all duration-300 hover:bg-green-400  active:scale-95 shadow-lg"
        >
          <FaWhatsapp size={16} className="animate-pulse sm:w-5 sm:h-5" />
          <span className="text-[10px] sm:text-xs md:text-sm font-black">INQUIRE NOW</span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;