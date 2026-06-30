export interface ItemBill {
  id: number;
  name: string;
  quantity: number;
  price: number;
  itemTotal: number;
  saving: number;
  finalCost: number;
}

export interface Offer {
  title: string;
  saving: number;
}

export interface Bill {
  subtotal: number;
  offers: Offer[];
  savings: number;
  total: number;
  itemBills: ItemBill[];
}