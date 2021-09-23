import { createAction, props } from '@ngrx/store';
import { Categories } from 'src/app/shop/models/categories.interface';
import { Goods } from 'src/app/shop/models/goods.interface';

export const getCatalogItems = createAction('[MAIN PAGE] fetch catalog items');

export const fetchCatalogItems = createAction(
  '[MAIN PAGE] fetch catalog items success',
  props<{ data: Categories[] }>()
);

export const getCategoryItems = createAction(
  '[CATEGORY PAGE] fetch category items'
);

export const fetchCategoryItems = createAction(
  '[CATEGORY PAGE] fetch category items success',
  props<{ data: Goods[] }>()
);
