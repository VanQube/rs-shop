import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { map, switchMap } from "rxjs/operators";
import { ShopService } from "../../shop/services/shop.service";
import { fetchCategoryItems,getCategoryItems } from "../actions/catalog.actions";

@Injectable({
  providedIn: 'root',
})
export class CategoryEffects {
  constructor(private actions: Actions, private shopService: ShopService) {}

  getCategoryItems: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(getCategoryItems),
    switchMap(() =>
      this.shopService
        .getSubCategoryItemsByCategory()
        .pipe(
          map((items) => fetchCategoryItems({ data: items }))
        )
    )
  ));
}
