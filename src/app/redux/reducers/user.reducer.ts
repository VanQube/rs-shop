import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { initialUserState, UserState } from '../store/user.state';

const reducer = createReducer(
  initialUserState,
  on(UserActions.getUserInfo, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(UserActions.getUserInfoSuccessful, (state, { data }) => ({
    ...state,
    data,
    loading: false,
    loaded: true,
  })),
  on(UserActions.clearUserInfo, (state) => ({ ...state, ...initialUserState }))
);

export function UserReducer(state: UserState, action: Action) {
  return reducer(state, action);
}
