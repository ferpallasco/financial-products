import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FinancialProduct } from '../../../interfaces/financial-product.interface';

@Component({
  selector: 'bp-financial-products-table',
  templateUrl: './financial-products-table.component.html',
  styleUrl: './financial-products-table.component.scss',
})
export class FinancialProductsTableComponent {
  @Input() financialProducts: FinancialProduct[] = [];

  @Output() editProduct = new EventEmitter<FinancialProduct>();
  @Output() deleteProduct = new EventEmitter<FinancialProduct>();
}
