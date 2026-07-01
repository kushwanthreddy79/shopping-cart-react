import type { Bill, ItemBill } from "../types/Bill";

interface BasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Product IDs
const PRODUCT_IDS = {
  BREAD: 1,
  MILK: 2,
  CHEESE: 3,
  SOUP: 4,
  BUTTER: 5,
} as const;

const round = (value: number): number => Number(value.toFixed(2));


const applyOffer = (
  offers: { title: string; saving: number }[],
  title: string,
  saving: number
): number => {
  if (saving > 0) {
    offers.push({
      title,
      saving: round(saving),
    });
  }

  return saving;
};

export const calculateBill = (items: BasketItem[]): Bill => {
  const itemBills: ItemBill[] = [];
  const offers: { title: string; saving: number }[] = [];

  let subtotal = 0;
  let totalSavings = 0;

  // Creating item bills
  items.forEach((item) => {
    const itemTotal = item.price * item.quantity;

    subtotal += itemTotal;

    itemBills.push({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      itemTotal: round(itemTotal),
      saving: 0,
      finalCost: round(itemTotal),
    });
  });


  // Cheese Offer (Buy One Get One)
  
  const cheese = itemBills.find(
    (item) => item.id === PRODUCT_IDS.CHEESE
  );

  if (cheese) {
    const freeCheese = Math.floor(cheese.quantity / 2);

    cheese.saving = round(freeCheese * cheese.price);

    cheese.finalCost = round(
      cheese.itemTotal - cheese.saving
    );

    totalSavings += applyOffer(
      offers,
      "Buy One Get One Cheese",
      cheese.saving
    );
  }


  // Soup Offer (Bread at Half Price)
 
  const soup = itemBills.find(
    (item) => item.id === PRODUCT_IDS.SOUP
  );

  const bread = itemBills.find(
    (item) => item.id === PRODUCT_IDS.BREAD
  );

  if (soup && bread) {
    const eligibleBread = Math.min(
      soup.quantity,
      bread.quantity
    );

    bread.saving = round(
      eligibleBread * bread.price * 0.5
    );

    bread.finalCost = round(
      bread.itemTotal - bread.saving
    );

    totalSavings += applyOffer(
      offers,
      "Half Price Bread",
      bread.saving
    );
  }


  // Butter Offer (33% OFF)

  const butter = itemBills.find(
    (item) => item.id === PRODUCT_IDS.BUTTER
  );

  if (butter) {
    butter.saving = round(
      butter.itemTotal / 3
    );

    butter.finalCost = round(
      butter.itemTotal - butter.saving
    );

    totalSavings += applyOffer(
      offers,
      "One Third Off Butter",
      butter.saving
    );
  }

  //Bill

  return {
    subtotal: round(subtotal),

    offers,

    savings: round(totalSavings),

    total: round(subtotal - totalSavings),

    itemBills,
  };
};