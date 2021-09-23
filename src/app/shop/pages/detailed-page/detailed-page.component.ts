import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Goods } from '../../models/goods.interface';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  public catItem: Goods;

  public breadCrumbsItems: MenuItem[];

  public subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.data.subscribe((data) => (this.catItem = data.item))
    );
  }
}
