import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { CoreService } from 'src/app/core/service/core.service';
import { getCatalogItems, fetchCatalogItems } from '../actions/catalog.actions';

@Injectable({
  providedIn: 'root',
})
export class CatalogEffects {
  constructor(private actions: Actions, private coreService: CoreService) {}

  getCatalogItems: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(getCatalogItems),
      switchMap(() =>
        this.coreService
          .getCategories()
          .pipe(map((items) => fetchCatalogItems({ data: items })))
      )
    )
  );
}
