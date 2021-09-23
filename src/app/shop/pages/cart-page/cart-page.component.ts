import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { forkJoin, Subscription } from 'rxjs';
import { userCartSelector } from 'src/app/redux/selectors/user.selector';
import { Goods } from '../../models/goods.interface';
import { ShopService } from '../../services/shop.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  public cartItems: Goods[] = [];

  public subscription: Subscription = new Subscription();

  constructor(private store: Store, private shopService: ShopService) {}

  ngOnInit(): void {
    this.store.select(userCartSelector).subscribe((ids) => {
      forkJoin(this.shopService.getCartItems(ids)).subscribe(
        (items) => (this.cartItems = items)
      );
    });
  }

  ngAfterViewInit() {}

  ngOnDestroy() {}
}
