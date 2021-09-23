import { ItemOrder } from './itemOrder.interface';
import { Order } from './order.interface';

export interface User {
  firstName: string;
  lastName: string;
  cart: Array<string>;
  favorites: Array<string>;
  orders: Order[];
}
