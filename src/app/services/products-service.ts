import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/producto-model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // > URL de la API.
  API_url = 'https://dummyjson.com/';

  constructor(private http: HttpClient) { }

  // > Se hace un llamado a la API, que recibe elementos de tipo "products", y lo retorna.
  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(`${this.API_url}products`).pipe(
      map(response => response.products)
    );
  }
}
