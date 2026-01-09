import { FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ name, image }) => {
  const phoneNumber = "919XXXXXXXXX"; 
  const message = `Hello, I'm interested in "${name}". Can I get more details?`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group relative bg-[#111111] border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 flex flex-col items-center text-center 
                    hover:border-red-500 hover:-translate-y-2 
                    /* Red Glow Effect added below */
                    hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]">
      
      {/* 1. White Image Box */}
      <div className="w-full bg-white p-8 flex justify-center items-center h-52 sm:h-60">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* 2. Content Area */}
      <div className="p-6 w-full flex flex-col items-center">
        
        {/* Product Name - Red Bold Text */}
        <h3 className="text-lg font-extrabold text-red-600 uppercase tracking-tighter mb-5 transition-colors duration-300 group-hover:text-red-500">
          {name}
        </h3>

        {/* 3. WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-black active:scale-95 shadow-lg"
        >
          <FaWhatsapp size={20} className="animate-pulse" />
          <span className="text-xs md:text-sm font-black">INQUIRE NOW</span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;