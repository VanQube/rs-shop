import { Categories } from 'src/app/shop/models/categories.interface';

export interface CatalogState {
  data: Categories[];
}

export const InitialCatalogState: CatalogState = {
  data: [
    { id: 'sa', name: 'test', subCategories: [{ id: 'rasa', name: 'sadasd' }] },
  ],
};
