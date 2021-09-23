import { User } from 'src/app/shop/models/user.interface';

export interface UserState {
  data: User;
  loading: boolean;
  loaded: boolean;
}

export const initialUserState: UserState = {
  data: {
    firstName: '',
    lastName: '',
    cart: [],
    favorites: [],
    orders: [],
  },
  loading: false,
  loaded: false,
};
