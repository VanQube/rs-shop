import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CatalogReducer } from '../redux/reducers/catalog.reducer';
import { CategoryReducer } from '../redux/reducers/category.reducer';
import { UserReducer } from '../redux/reducers/user.reducer';
import { CatalogEffects } from '../redux/effects/catalog.effect';
import { CategoryEffects } from '../redux/effects/category.effect';
import { UserEffects } from '../redux/effects/user.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('catalog', CatalogReducer),
    StoreModule.forFeature('categoryItems', CategoryReducer),
    StoreModule.forFeature('user', UserReducer),
    EffectsModule.forFeature([CatalogEffects, CategoryEffects, UserEffects]),
  ],
})
export class AuthModule {}
