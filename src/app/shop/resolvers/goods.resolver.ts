import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Goods } from '../models/goods.interface';
import { ShopService } from '../services/shop.service';

@Injectable()
export class ItemResolver implements Resolve<Goods> {
  constructor(private shopService: ShopService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Goods> {
    return this.shopService.getItemById(route.paramMap.get('id')!);
  }
}
