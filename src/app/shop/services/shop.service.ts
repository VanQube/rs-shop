import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Goods } from '../models/goods.interface';
import { ServerLinks } from 'src/app/app.consts';
import { userCartSelector } from 'src/app/redux/selectors/user.selector';

@Injectable()
export class ShopService {
  private subCategoryId: string = '';

  private categoryId: string = '';

  private cartItemsIds: string[];

  constructor(private http: HttpClient, private store: Store) {
    this.store.select(userCartSelector);
  }

  public getItemById(itemId: string): Observable<Goods> {
    return this.http.get<Goods>(`${ServerLinks.ITEM}${itemId}`);
  }

  public updateCatIds(category: string, subCategory: string): void {
    this.categoryId = category;
    this.subCategoryId = subCategory;
  }

  public getSubCategoryItemsByCategory(): Observable<Goods[]> {
    return this.http.get<Goods[]>(
      `${ServerLinks.CATEGORY}${this.categoryId}/${this.subCategoryId}`
    );
  }

  public getCartItems(cartItemsIds: string[] = []): Array<Observable<Goods>> {
    const cartItems: Array<Observable<Goods>> = cartItemsIds.map((itemId) =>
      this.getItemById(itemId)
    );
    return cartItems;
  }

  public getSliderItems(): Observable<Goods[]> {
    return this.http.get<Goods[]>(
      `http://localhost:3004/goods/category/electronics/mobile?start=0&count=10`
    );
  }

  public getPopularItems(): Observable<Goods[]> {
    return this.http.get<Goods[]>(
      `http://localhost:3004/goods/category/hobbies/music-instruments?start=0&count=10`
    );
  }
}
