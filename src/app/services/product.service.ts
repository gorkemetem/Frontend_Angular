import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductResponsemodel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiUrl = "https://localhost:44335/api/products/getall"
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductResponsemodel>{
    return this.httpClient.get<ProductResponsemodel>(this.apiUrl);
  }
}
