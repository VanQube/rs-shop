import { Action, createReducer, on } from '@ngrx/store';
import * as CatalogActions from '../actions/catalog.actions';
import { CatalogState, InitialCatalogState } from '../store/catalog.state';

export const reducer = createReducer(
  InitialCatalogState,
  on(CatalogActions.getCatalogItems, (state) => ({ ...state })),
  on(CatalogActions.fetchCatalogItems, (state, { data }) => ({
    ...state,
    data,
  }))
);

export function CatalogReducer(state: CatalogState, action: Action) {
  return reducer(state, action);
}
