import { Component } from '@angular/core';
import { FinancialProduct } from '../../../interfaces/financial-product.interface';
import { FinancialProductService } from '../../services/financial-product.service';

@Component({
  selector: 'bp-update-financial-project-container',
  templateUrl: './update-financial-project-container.component.html',
  styleUrl: './update-financial-project-container.component.scss',
})
export class UpdateFinancialProjectContainerComponent {
  formData: FinancialProduct | null = null;

  constructor(private financialProductService: FinancialProductService) {
    this.formData = this.financialProductService.getSelectedProduct();
  }
}
