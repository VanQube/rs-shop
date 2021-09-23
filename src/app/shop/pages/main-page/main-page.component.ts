import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { categoryResultSelector } from 'src/app/redux/selectors/category.selector';
import { Goods } from '../../models/goods.interface';
import { User } from '../../models/user.interface';
import { ShopService } from '../../services/shop.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public userInfo: User;

  public products: Goods[];

  public popular: Goods[];

  public subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService,
    private primengConfig: PrimeNGConfig,
    private shopService: ShopService,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.shopService
        .getSliderItems()
        .subscribe((sliderItem) => (this.products = sliderItem))
    );
    this.subscription.add(
      this.shopService
        .getPopularItems()
        .subscribe((popularItem) => (this.popular = popularItem))
    );
    this.primengConfig.ripple = true;
  }

  public addToCart(id: string): void {
    this.userService
      .deleteItemFromCart('612d3ae6754952fdd2bb8f7a')
      .subscribe((res) => res);
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
