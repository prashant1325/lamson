import ProductCard from "../assets/components/ProductCard";


const Accessories = () => {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProductCard name="Helmet" price="1500" />
      <ProductCard name="Gloves" price="350" />
      <ProductCard name="Lock" price="500" />
    </div>
  );
};

export default Accessories;
