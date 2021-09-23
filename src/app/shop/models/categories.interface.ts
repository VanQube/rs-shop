import { Subcategories } from './subCategories.interface';

export interface Categories {
  id: string;
  name: string;
  subCategories: Subcategories[];
}
