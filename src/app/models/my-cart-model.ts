import { Product } from './producto-model';

export interface CartItem {
  product: Product;
  quantity: number;
  totalPrice: number;
}