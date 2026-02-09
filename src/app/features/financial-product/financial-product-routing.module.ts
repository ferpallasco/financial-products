import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFinancialProductContainerComponent } from './components/create-financial-product-container/create-financial-product-container.component';
import { FinancialProductsContainerComponent } from './components/financial-products-container/financial-products-container.component';
import { UpdateFinancialProjectContainerComponent } from './components/update-financial-project-container/update-financial-project-container.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialProductsContainerComponent,
    canActivate: [],
  },
  {
    path: 'create',
    component: CreateFinancialProductContainerComponent,
    canActivate: [],
  },
  {
    path: ':id/update',
    component: UpdateFinancialProjectContainerComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule],
})
export class FinancialProductRoutingModule {}
