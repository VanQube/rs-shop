import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState } from '../store/category.state';

export const categoryFeatureSelector =
  createFeatureSelector<CategoryState>('categoryItems');
export const categoryResultSelector = createSelector(
  categoryFeatureSelector,
  (state) => state.data
);
