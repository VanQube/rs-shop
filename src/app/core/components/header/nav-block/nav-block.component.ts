import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { CoreService } from 'src/app/core/service/core.service';
import { SearchService } from 'src/app/core/service/search.service';
import { getCatalogItems } from 'src/app/redux/actions/catalog.actions';
import { catalogResultSelector } from 'src/app/redux/selectors/catalog.selector';
import { AppState } from 'src/app/redux/store/app.state';
import { Categories } from 'src/app/shop/models/categories.interface';
import { Goods } from 'src/app/shop/models/goods.interface';
import { Subcategories } from 'src/app/shop/models/subCategories.interface';
import { ShopService } from 'src/app/shop/services/shop.service';

@Component({
  selector: 'app-nav-block',
  templateUrl: './nav-block.component.html',
  styleUrls: ['./nav-block.component.scss'],
})
export class NavBlockComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;

  public catalogItems$: Observable<Categories[]>;

  public showCatalog: boolean = false;

  public showModal: boolean = false;

  public categories: Categories[];

  public selectedCategory: Categories;

  public selectedCategories: Subcategories[];

  public catId: number;

  public subscription: Subscription = new Subscription();

  public searchInputValue: string = '';

  public searchItems$: Observable<Goods[]>;

  public searchItems: Goods[] = [];

  constructor(
    private searchService: SearchService,
    private shopService: ShopService,
    private store: Store<AppState>
  ) {}

  toggleCatalog(): void {
    this.showCatalog = !this.showCatalog;
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  getCategoryId(id: number): void {
    this.selectedCategory = this.categories[id];
    this.selectedCategories = this.categories[id].subCategories;
  }

  public updateIds(
    event: Event,
    categoryId: string,
    subCategoryId: string
  ): void {
    this.shopService.updateCatIds(categoryId, subCategoryId);
  }

  public ngOnInit() {
    this.store.dispatch(getCatalogItems());
    this.catalogItems$ = this.store.select(catalogResultSelector);
    this.subscription.add(
      this.catalogItems$.subscribe((items) => {
        this.categories = items;
        this.selectedCategory = this.categories[0];
        this.selectedCategories = this.categories[0].subCategories;
      })
    );
  }

  public ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        map(() => this.searchInputValue),
        filter((searchString) => searchString.length >= 3),
        debounceTime(500)
      )
      .subscribe((searchString) => {
        this.searchItems$ = this.searchService.getSearchItems(searchString);
        this.searchItems$.subscribe((items) => (this.searchItems = items));
      });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
