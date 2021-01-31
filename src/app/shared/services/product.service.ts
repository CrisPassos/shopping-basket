import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected api = 'https://5ee744ce52bb0500161fd6e4.mockapi.io/products';

  constructor(protected httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient.get(this.api);
  }

  addProductBasket(): void {

  }

  protected removeProductBasket(): void {

  }
}
