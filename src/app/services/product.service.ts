import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {productUrl} from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts():Observable<Product[]>{
    //TODO Populate product from API and return observabels
    return this.http.get<Product[]>(productUrl);
  }
}
