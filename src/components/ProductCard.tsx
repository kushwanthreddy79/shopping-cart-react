import type { Product } from "../types/Product";
import { useDispatch } from "react-redux";
import { addItem } from "../features/basket/basketSlice";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col items-center">
  <h3 className="text-xl font-bold">
    {product.name} 
  </h3>

  <p className="text-blue-600 text-lg mb-4">
   ₹{product.price.toFixed(2)}
  </p>

  <button
    onClick={() => dispatch(addItem(product))}
    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
  >
    Add to Basket
  </button>

</div>

  );
};

export default ProductCard;