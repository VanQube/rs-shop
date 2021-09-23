import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shop/models/user.interface';

export const getUserInfo = createAction('[USER INFO] GET USER INFO');

export const getUserInfoSuccessful = createAction(
  '[USER INFO EFFECT] SET FETCHED USER INFO',
  props<{ data: User }>()
);

export const clearUserInfo = createAction('[USER INFO] CLEAR USER INFO');
