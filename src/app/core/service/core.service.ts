import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/shop/models/categories.interface';

@Injectable()
export class CoreService {
  private categoriesUrl: string = 'http://localhost:3004/categories';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Categories[]> {
    return this.httpClient.get<Categories[]>(this.categoriesUrl);
  }
}
