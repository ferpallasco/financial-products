import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialProductModule } from '../../financial-product.module';
import { FinancialProductsTableComponent } from './financial-products-table.component';

describe('FinancialProductsTableComponent', () => {
  let component: FinancialProductsTableComponent;
  let fixture: ComponentFixture<FinancialProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialProductsTableComponent],
      imports: [FinancialProductModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
