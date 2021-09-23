import { ItemOrder } from './itemOrder.interface';

export interface Order {
  items: ItemOrder[];
  details: {
    name: string;
    address: string;
    phone: string;
    timeToDeliver: string;
    comment: string;
  };
  id: string;
}
