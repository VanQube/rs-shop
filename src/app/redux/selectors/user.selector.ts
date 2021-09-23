import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../store/user.state';

export const userFeatureSelector = createFeatureSelector<UserState>('user');
export const userResultSelector = createSelector(
  userFeatureSelector,
  (state) => state.data
);
export const userCartSelector = createSelector(
  userFeatureSelector,
  (state) => state.data.cart
);
