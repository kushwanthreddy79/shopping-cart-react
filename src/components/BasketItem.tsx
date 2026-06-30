import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../features/basket/basketSlice";

interface Props {
  item: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    itemTotal: number;
    saving: number;
    finalCost: number;
  };
}

const BasketItem = ({ item }: Props) => {

  const dispatch = useDispatch();

  return (

    <div className="border-b py-6">

      <div className="flex justify-between">

        <div>

          <h3 className="text-xl font-semibold">

            {item.name}

          </h3>

          <p className="text-gray-600">

            ₹{item.price.toFixed(2)}

          </p>

        </div>

        <div className="flex items-center gap-3">

          <button
            className="bg-blue-500 text-white w-10 h-10 rounded"
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>

          <span>{item.quantity}</span>

          <button
            className="border border-blue-500 text-blue-500 w-10 h-10 rounded"
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            -
          </button>

        </div>

      </div>

      <div className="text-right mt-3 text-gray-600">

        <p>

          Item price

          ₹{item.price.toFixed(2)}

          ×

          {item.quantity}

          =

          ₹{item.itemTotal.toFixed(2)}

        </p>

        {item.saving > 0 && (

          <>

            <p className="text-red-500">

              Savings

              ₹{item.saving.toFixed(2)}

            </p>

            <p className="font-semibold">

              Item Cost

              ₹{item.finalCost.toFixed(2)}

            </p>

          </>

        )}

      </div>

    </div>

  );

};

export default BasketItem;