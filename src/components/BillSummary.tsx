import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { calculateBill } from "../utils/offers";

const BillSummary = () => {
  const items = useSelector(
    (state: RootState) => state.basket.items
  );

  const bill = calculateBill(items);

  return (
    <div className="mt-6 border rounded-lg p-4 shadow">
      <h2 className="text-xl font-bold mb-4">
        Bill Summary
      </h2>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₹{bill.subtotal.toFixed(2)}</span>
      </div>

      <div className="mt-4">
        {bill.offers.map((offer) => (
          <div
            key={offer.title}
            className="flex justify-between text-green-600"
          >
            <span>{offer.title}</span>
            <span>-₹{offer.saving.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <hr className="my-4" />

      <div className="flex justify-between font-semibold">
        <span>Total Savings</span>
        <span>₹{bill.savings.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-xl font-bold mt-3">
        <span>Final Total</span>
        <span>₹{bill.total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default BillSummary;