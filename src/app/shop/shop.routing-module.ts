import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SubCategoryResolver } from './resolvers/category.resolver';
import { ItemResolver } from './resolvers/goods.resolver';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'item/:id',
    component: DetailedPageComponent,
    resolve: { item: ItemResolver },
  },
  {
    path: 'subCategory/:catId/:subId',
    component: CategoryPageComponent,
    resolve: { subCatItem: SubCategoryResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
