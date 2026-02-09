import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AlertType } from '../../../../ui/components/alerts/enums/alert-type.enum';
import { AlertService } from '../../../../ui/components/alerts/services/alert.service';
import { FinancialProduct } from '../../../interfaces/financial-product.interface';
import { FinancialProductService } from '../../services/financial-product.service';

@Component({
  selector: 'bp-financial-products-container',
  templateUrl: './financial-products-container.component.html',
  styleUrl: './financial-products-container.component.scss',
})
export class FinancialProductsContainerComponent implements OnInit {
  financialProducts: FinancialProduct[] = [];
  elementsByPage: FinancialProduct[] = [];
  selectedFinancialProduct: FinancialProduct | null = null;

  gettingFinancialProducts = false;
  deletingFinancialProducts = false;
  isConfirmationDialogVisible = false;

  pageSize = 5;

  constructor(
    private financialProductService: FinancialProductService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFinancialProducts();
  }

  getFinancialProducts(): void {
    this.gettingFinancialProducts = true;
    this.financialProducts = [];

    this.financialProductService
      .getFinancialProducts()
      .pipe(
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((response) => {
        this.gettingFinancialProducts = false;

        if (response === null) {
          this.alertService.showNotification(
            'Error al obtener los productos financiero.',
            AlertType.Error
          );

          this.takeElementaByPageSize();

          return;
        }

        this.financialProducts = response;

        this.takeElementaByPageSize();
      });
  }

  handleEditProduct(product: FinancialProduct): void {
    this.financialProductService.setSelectedProduct(product);

    this.router.navigate([`/financial-products/${product.id}/update`]);
  }

  handleDeleteProduct(product: FinancialProduct) {
    this.selectedFinancialProduct = product;

    this.isConfirmationDialogVisible = true;
  }

  handleConfirm() {
    this.isConfirmationDialogVisible = false;

    if (!this.selectedFinancialProduct?.id) {
      return;
    }

    this.deletingFinancialProducts = true;

    this.financialProductService
      .delete(this.selectedFinancialProduct.id)
      .pipe(
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((response) => {
        this.deletingFinancialProducts = false;

        if (response === null) {
          this.alertService.showNotification(
            'Error al eliminar el producto financiero.',
            AlertType.Error
          );

          return;
        }

        this.alertService.showNotification(
          'Producto financiero eliminado con éxito.',
          AlertType.Success
        );

        this.getFinancialProducts();
      });
  }

  handleCancel() {
    this.isConfirmationDialogVisible = false;
  }

  handleChangePageSize(pageSize: number): void {
    this.pageSize = pageSize;

    this.takeElementaByPageSize();
  }

  takeElementaByPageSize(): void {
    if (this.financialProducts.length >= this.pageSize) {
      this.elementsByPage = this.financialProducts.slice(0, this.pageSize);

      return;
    }

    this.elementsByPage = this.financialProducts;
  }

  handleSearcherValueChange(value: string) {
    console.log('Searching for: ', value);
  }
}
