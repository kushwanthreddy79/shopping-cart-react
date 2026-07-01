import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { calculateBill } from "../utils/offers";

const FloatingCart = () => {
  const items = useSelector(
    (state: RootState) => state.basket.items
  );

  //empty cart
  if (items.length === 0) return null;

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const bill = calculateBill(items);

  return (
    <Link
      to="/cart"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-2xl px-6 py-4 flex items-center gap-4 transition duration-300 z-50"
    >
      <ShoppingCart size={28} />

      <div>
        <p className="font-bold">
          {totalItems} {totalItems === 1 ? "Item" : "Items"}
        </p>

        <p className="text-sm">
          ₹{bill.total.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default FloatingCart;