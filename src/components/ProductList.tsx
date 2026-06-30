import ProductCard from "./ProductCard";
import { products } from "../data/products";

const ProductList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <h2 className="text-3xl font-bold mb-5">
        Products
      </h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
    </div>
  );
};

export default ProductList;