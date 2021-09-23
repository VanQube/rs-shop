import { Goods } from 'src/app/shop/models/goods.interface';

export interface CategoryState {
  data: Goods[];
}

export const InitialCategoryState: CategoryState = {
  data: [],
};
