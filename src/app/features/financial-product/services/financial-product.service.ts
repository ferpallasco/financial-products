import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBancoPinchinchaEnv } from '../../../core/apis/banco-pichincha/env-banco-pichincha.config';
import {
  CreateFinancialProduct,
  FinancialProduct,
} from '../../interfaces/financial-product.interface';

@Injectable({
  providedIn: 'root',
})
export class FinancialProductService {
  BASE_URL = `${ApiBancoPinchinchaEnv.baseUrl}/ipf-msa-productosfinancieros/bp/products`;

  constructor(private http: HttpClient) {}

  selectedProduct: FinancialProduct | null = null;

  setSelectedProduct(product: FinancialProduct) {
    this.selectedProduct = product;
  }

  getSelectedProduct() {
    return this.selectedProduct;
  }

  verifyIf(id: string) {
    const url = `${this.BASE_URL}/verification?id=${id}`;

    return this.http.get<boolean>(`${url}`);
  }

  getFinancialProducts() {
    const url = `${this.BASE_URL}`;

    return this.http.get<FinancialProduct[]>(`${url}`);
  }

  create(financialProduct: CreateFinancialProduct) {
    const url = `${this.BASE_URL}`;

    return this.http.post<FinancialProduct>(`${url}`, financialProduct);
  }

  update(financialProduct: CreateFinancialProduct) {
    const url = `${this.BASE_URL}`;

    return this.http.put<FinancialProduct>(`${url}`, financialProduct);
  }

  delete(id: string): Observable<any> {
    const url = `${this.BASE_URL}?id=${id}`;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json',
    };
    return this.http.delete(url, httpOptions);
  }
}
