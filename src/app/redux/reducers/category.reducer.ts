import { Action, createReducer, on } from '@ngrx/store';
import * as CatalogActions from '../actions/catalog.actions';
import { CategoryState, InitialCategoryState } from '../store/category.state';

export const reducer = createReducer(
  InitialCategoryState,
  on(CatalogActions.getCategoryItems, (state) => ({ ...state })),
  on(CatalogActions.fetchCategoryItems, (state, { data }) => ({
    ...state,
    data,
  }))
);

export function CategoryReducer(state: CategoryState, action: Action) {
  return reducer(state, action);
}
