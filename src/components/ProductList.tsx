import ProductCard from "./ProductCard";
import { products } from "../data/products";

const ProductList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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