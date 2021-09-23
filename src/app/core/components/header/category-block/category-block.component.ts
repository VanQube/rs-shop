import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop/services/shop.service';

@Component({
  selector: 'app-category-block',
  templateUrl: './category-block.component.html',
  styleUrls: ['./category-block.component.scss'],
})
export class CategoryBlockComponent {
  constructor(private shopService: ShopService) {}

  public updateIds(
    event: Event,
    categoryId: string,
    subCategoryId: string
  ): void {
    this.shopService.updateCatIds(categoryId, subCategoryId);
  }
}
