import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SliderBlockComponent } from './components/slider-block/slider-block.component';
import { PopularBlockComponent } from './components/popular-block/popular-block.component';
import { ShopService } from './services/shop.service';
import { UserService } from './services/user.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CatalogReducer } from '../redux/reducers/catalog.reducer';
import { CategoryReducer } from '../redux/reducers/category.reducer';
import { UserReducer } from '../redux/reducers/user.reducer';
import { CatalogEffects } from '../redux/effects/catalog.effect';
import { CategoryEffects } from '../redux/effects/category.effect';
import { UserEffects } from '../redux/effects/user.effect';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ItemResolver } from './resolvers/goods.resolver';
import { SubCategoryResolver } from './resolvers/category.resolver';
import { ShopRoutingModule } from './shop.routing-module';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabViewModule } from 'primeng/tabview';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    SliderBlockComponent,
    PopularBlockComponent,
    MainPageComponent,
    CategoryPageComponent,
    DetailedPageComponent,
    CartPageComponent,
  ],
  imports: [
    SharedModule,
    ShopRoutingModule,
    RatingModule,
    StoreModule.forFeature('catalog', CatalogReducer),
    StoreModule.forFeature('categoryItems', CategoryReducer),
    StoreModule.forFeature('user', UserReducer),
    EffectsModule.forFeature([CatalogEffects, CategoryEffects, UserEffects]),
    ButtonModule,
    DataViewModule,
    DropdownModule,
    TabViewModule,
    BreadcrumbModule,
    CarouselModule,
  ],
  exports: [SliderBlockComponent, PopularBlockComponent],
  providers: [ShopService, UserService, ItemResolver, SubCategoryResolver],
})
export class ShopModule {}
