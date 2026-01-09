import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="absolute bg-white shadow-lg rounded-md">
      <Link
        to="/products/spare-parts"
        className="block px-4 py-2 hover:bg-gray-100"
      >
        Spare Parts
      </Link>

      <Link
        to="/products/accessories"
        className="block px-4 py-2 hover:bg-gray-100"
      >
        Accessories
      </Link>
    </div>
  );
};

export default Dropdown;
