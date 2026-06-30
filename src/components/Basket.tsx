import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import BasketItem from "./BasketItem";
import BillSummary from "./BillSummary";
import { calculateBill } from "../utils/offers";

const Basket = () => {
  // Get basket items from Redux
  const items = useSelector((state: RootState) => state.basket.items);

  // Calculate complete bill
  const bill = calculateBill(items);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold mb-5">Basket</h2>

      {bill.itemBills.length === 0 ? (
        <p className="text-gray-500">Basket is empty</p>
      ) : (
        <>
          {bill.itemBills.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
            />
          ))}

          <BillSummary />
        </>
      )}
    </div>
  );
};

export default Basket;