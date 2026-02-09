import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  CreateFinancialProduct,
  FinancialProduct,
} from '../../interfaces/financial-product.interface';
import { FinancialProductService } from './financial-product.service';

describe('FinancialProductService', () => {
  let service: FinancialProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FinancialProductService],
    });
    service = TestBed.inject(FinancialProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the selected product', () => {
    const product: FinancialProduct = {
      id: '1',
      name: 'Product 1',
    } as FinancialProduct;
    service.setSelectedProduct(product);
    expect(service.selectedProduct).toEqual(product);
  });

  it('should get the selected product', () => {
    const product: FinancialProduct = {
      id: '1',
      name: 'Product 1',
    } as FinancialProduct;
    service.selectedProduct = product;
    const selectedProduct = service.getSelectedProduct();
    expect(selectedProduct).toEqual(product);
  });

  it('should verify if a product exists', () => {
    const productId = '1';
    const url = `${service.BASE_URL}/verification?id=${productId}`;
    const mockResponse = true;

    service.verifyIf(productId).subscribe((response) => {
      expect(response).toBe(mockResponse);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get the list of financial products', () => {
    const products: FinancialProduct[] = [
      { id: '1', name: 'Product 1' },
      { id: '2', name: 'Product 2' },
    ] as FinancialProduct[];

    service.getFinancialProducts().subscribe((response) => {
      expect(response).toEqual(products);
    });

    const req = httpMock.expectOne(service.BASE_URL);
    expect(req.request.method).toBe('GET');
    req.flush(products);
  });

  it('should create a new financial product', () => {
    const product: CreateFinancialProduct = {
      name: 'New Product',
    } as CreateFinancialProduct;

    service.create(product).subscribe((response) => {
      expect(response).toEqual(product);
    });

    const req = httpMock.expectOne(service.BASE_URL);
    expect(req.request.method).toBe('POST');
    req.flush(product);
  });

  it('should update an existing financial product', () => {
    const product: CreateFinancialProduct = {
      id: '1',
      name: 'Updated Product',
    } as CreateFinancialProduct;
    service.update(product).subscribe();

    const req = httpMock.expectOne(`${service.BASE_URL}`);
    expect(req.request.method).toBe('PUT');
    req.flush(product);
  });

  it('should delete a financial product', () => {
    const productId = '1';
    service.delete(productId).subscribe((response) => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`${service.BASE_URL}?id=${productId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
