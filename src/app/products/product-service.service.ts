import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants/app-constants';
import { Category } from '../site-layout/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private httpclient:HttpClient) { }
  
  createProduct(prodBody):Observable<Product>{
    return this.httpclient.post<Product>(`${AppConstants.BASE_URL}${AppConstants.PROD}`,prodBody);
  }
  viewProduct():Observable<Product>{
    return this.httpclient.get<Product>(`${AppConstants.BASE_URL}${AppConstants.PROD}`);
  }
  viewProductByID(pID):Observable<Product>{
    return this.httpclient.get<Product>(`${AppConstants.BASE_URL}products?id=${pID}`);
  }
  updateProduct(prodId,prodBody):Observable<Product>{
    return this.httpclient.put<Product>(`${AppConstants.BASE_URL}${AppConstants.PROD}${prodId}`,prodBody);
  }
  deleteProduct(prodId):Observable<Product>{
    return this.httpclient.delete<Product>(`${AppConstants.BASE_URL}${AppConstants.PROD}${prodId}`);
  }
  searchCatProduct(catId):Observable<Product>{
    return this.httpclient.get<Product>(`${AppConstants.BASE_URL}products?categoryId=${catId}`);
  }
  searchDateProduct(dateParams):Observable<Product>{
    return this.httpclient.get<Product>(`${AppConstants.BASE_URL}${AppConstants.PROD}${AppConstants.DATE}${dateParams}`);
  }
  getCategories() :Observable<Category>{
    return this.httpclient.get<Category>(`${AppConstants.BASE_URL}${AppConstants.CATEGORIES_LIST}`);
  }
}
