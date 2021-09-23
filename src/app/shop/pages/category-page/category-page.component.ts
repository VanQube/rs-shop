import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { getUserInfo } from 'src/app/redux/actions/user.actions';
import { categoryResultSelector } from 'src/app/redux/selectors/category.selector';
import { AppState } from 'src/app/redux/store/app.state';
import { Goods } from '../../models/goods.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  public products: Goods[];

  public categoryItems$: Observable<Goods[]>;

  public sortOptions: SelectItem[];

  public sortOrder: number;

  public sortField: string;

  public subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private primengConfig: PrimeNGConfig,
    private userService: UserService
  ) {
    this.categoryItems$ = this.store.select(categoryResultSelector);
  }

  onSortChange(event: HTMLInputElement): void {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.categoryItems$.subscribe(
        (subCatItem) => (this.products = subCatItem)
      )
    );

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];

    this.primengConfig.ripple = true;
  }

  public addToCart(event: Event, id: string): void {
    event.preventDefault();
    this.userService.addItemToCard(id).subscribe((res) => res);
    this.store.dispatch(getUserInfo());
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
