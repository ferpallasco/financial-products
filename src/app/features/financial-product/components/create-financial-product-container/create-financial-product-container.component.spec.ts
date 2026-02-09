import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortDatePipe } from '../../../../shared/pipes/short-date.pipe';
import { FinancialProductModule } from '../../financial-product.module';
import { CreateFinancialProductContainerComponent } from './create-financial-product-container.component';

describe('CreateFinancialProductContainerComponent', () => {
  let component: CreateFinancialProductContainerComponent;
  let fixture: ComponentFixture<CreateFinancialProductContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        FinancialProductModule,
      ],
      declarations: [CreateFinancialProductContainerComponent],
      providers: [ShortDatePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFinancialProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
