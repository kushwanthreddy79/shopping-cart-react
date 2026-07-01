import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "../redux/store";

const Navbar = () => {
  const items = useSelector(
    (state: RootState) => state.basket.items
  );

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="bg-blue-600 text-white shadow">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          Shopping Cart
        </Link>

        <Link
          to="/cart"
          className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold"
        >
          <ShoppingCart size={22} />

          Cart ({totalItems})
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;