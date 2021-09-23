export interface Goods {
  id: string;
  name: string;
  imageUrls: Array<string>;
  rating: number;
  availableAmount: number;
  price: number;
  description: string;
  isInCart: boolean;
  isFavorite: boolean;
}
