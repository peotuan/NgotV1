import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  public api = '';

  constructor(private http: HttpClient) {
    this.api = environment.api;
  }

  public getProductDetail(productId: any): Observable<any> {
    return this.http.get(`${this.api}/product-detail/${productId}`);
  }
}
