import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CatalogState } from '../store/catalog.state';

export const catalogFeatureSelector =
  createFeatureSelector<CatalogState>('catalog');
export const catalogResultSelector = createSelector(
  catalogFeatureSelector,
  (state) => state.data
);
