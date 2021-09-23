import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ShopService } from '../services/shop.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/store/app.state';
import { Goods } from '../models/goods.interface';
import { getCategoryItems } from 'src/app/redux/actions/catalog.actions';

@Injectable()
export class SubCategoryResolver implements Resolve<Goods[]> {
  constructor(
    private shopService: ShopService,
    private store: Store<AppState>
  ) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Goods[]> {
    this.shopService.updateCatIds(
      route.paramMap.get('catId')!,
      route.paramMap.get('subId')!
    );
    this.store.dispatch(getCategoryItems());
    return this.shopService.getSubCategoryItemsByCategory();
  }
}
