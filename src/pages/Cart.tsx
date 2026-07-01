import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Basket from "../components/Basket";
import BillSummary from "../components/BillSummary";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <Link
          to="/"
          className="text-blue-600 font-semibold"
        >
          ← Continue Shopping
        </Link>

        <h1 className="text-3xl font-bold mt-5 mb-6">
          Your Cart
        </h1>

        <Basket />

        <BillSummary />

      </div>

    </div>
  );
};

export default Cart;