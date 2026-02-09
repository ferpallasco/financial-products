import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortDatePipe } from '../../shared/pipes/short-date.pipe';
import { UiAlertComponent } from '../../ui/components/alerts/alert/alert.component';
import { UiMoreActionsButtonComponent } from '../../ui/components/buttons/more-actions-button/more-actions-button.component';
import { UiPrimaryButtonComponent } from '../../ui/components/buttons/primary-button/primary-button.component';
import { UiSecondaryButtonComponent } from '../../ui/components/buttons/secondary-button/secondary-button.component';
import { UiConfirmationDialogComponent } from '../../ui/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { UiInfoIconComponent } from '../../ui/components/icons/info-icon/info-icon.component';
import { UiInputErrorMessagesComponent } from '../../ui/components/inputs/input-error-messages/input-error-messages.component';
import { UiInputFormFieldComponent } from '../../ui/components/inputs/input-form-field/input-form-field.component';
import { UiSearcherInputComponent } from '../../ui/components/inputs/ui-searcher-input/ui-searcher-input.component';
import { UiSplitterComponent } from '../../ui/components/splitters/splitter/splitter.component';
import { UiFooterTableComponent } from '../../ui/components/tables/footer-table/footer-table.component';
import { CreateFinancialProductContainerComponent } from './components/create-financial-product-container/create-financial-product-container.component';
import { CreateFinancialProductComponent } from './components/create-financial-product/create-financial-product.component';
import { FinancialProductsContainerComponent } from './components/financial-products-container/financial-products-container.component';
import { FinancialProductsTableComponent } from './components/financial-products-table/financial-products-table.component';
import { FinancialTableSkeletonComponent } from './components/financial-table-skeleton/financial-table-skeleton.component';
import { UpdateFinancialProjectContainerComponent } from './components/update-financial-project-container/update-financial-project-container.component';
import { FinancialProductRoutingModule } from './financial-product-routing.module';

const UI_COMPONENTS = [
  UiFooterTableComponent,
  UiMoreActionsButtonComponent,
  UiSecondaryButtonComponent,
  UiPrimaryButtonComponent,
  UiInputFormFieldComponent,
  UiInputErrorMessagesComponent,
  UiInfoIconComponent,
  UiSearcherInputComponent,
  UiAlertComponent,
  UiConfirmationDialogComponent,
  UiSplitterComponent,
];
@NgModule({
  declarations: [
    CreateFinancialProductContainerComponent,
    CreateFinancialProductComponent,
    UpdateFinancialProjectContainerComponent,
    FinancialProductsContainerComponent,
    FinancialProductsTableComponent,
    FinancialTableSkeletonComponent,
  ],
  imports: [
    CommonModule,
    FinancialProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UI_COMPONENTS,
    ShortDatePipe,
  ],
  providers: [ShortDatePipe],
})
export class FinancialProductModule {}
