export type WeightOption = '500g' | '1kg' | '2kg' | '5kg' | '10kg';

export interface Product {
  id: string;
  name: string;
  image: string;
  prices: Record<WeightOption, number>;
  description: string;
}

export interface CartItem {
  product: Product;
  weight: WeightOption;
  quantity: number;
}

export interface CheckoutData {
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}
