import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'financial-products',
    loadChildren: () =>
      import('./features/financial-product/financial-product.module').then(
        (m) => m.FinancialProductModule
      ),
  },
  {
    path: '**',
    redirectTo: 'financial-products',
    pathMatch: 'full',
  },
];
