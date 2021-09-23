import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Goods } from 'src/app/shop/models/goods.interface';
import { ServerLinks } from 'src/app/app.consts';

@Injectable()
export class SearchService {
  public searchQuery: string;

  constructor(private http: HttpClient) {}

  public getSearchItems(searchQuery: string): Observable<Goods[]> {
    this.searchQuery = searchQuery;
    return this.fetchSearchItems().pipe(
      switchMap(() => this.fetchSearchItems())
    );
  }

  public fetchSearchItems(): Observable<Goods[]> {
    const params: HttpParams = new HttpParams().append(
      'text',
      this.searchQuery
    );

    return this.http.get<Goods[]>(ServerLinks.SEARCH, { params });
  }
}
