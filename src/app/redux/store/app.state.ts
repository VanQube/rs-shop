import { CatalogState, InitialCatalogState } from './catalog.state';
import { CategoryState, InitialCategoryState } from './category.state';
import { initialUserState, UserState } from './user.state';

export interface AppState {
  catalog: CatalogState;
  categoryItems: CategoryState;
  user: UserState;
}

export const InitialAppState: AppState = {
  catalog: InitialCatalogState,
  categoryItems: InitialCategoryState,
  user: initialUserState,
};
