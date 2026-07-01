import type { Product } from "../types/Product";
import { useDispatch } from "react-redux";
import { addItem } from "../features/basket/basketSlice";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300 flex flex-col items-center">

    <h3 className="text-xl font-bold">
         {product.name}
    </h3>
    <p className="text-sm text-gray-500 mt-1">
  {product.quantityLabel}
</p>
    <img
         src={product.image}
         alt={product.name}
         className="w-36 h-36 object-contain mb-4"
         />
    <p className="text-gray-600 mt-2">
        ₹{product.price.toFixed(2)}
    </p>

  <button
    onClick={() => dispatch(addItem(product))}
    className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
  >
    Add to Cart
  </button>

</div>

  );
};

export default ProductCard;