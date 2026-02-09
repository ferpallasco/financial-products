import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FinancialProductService } from '../../services/financial-product.service';
import { UpdateFinancialProjectContainerComponent } from './update-financial-project-container.component';

describe('UpdateFinancialProjectContainerComponent', () => {
  let component: UpdateFinancialProjectContainerComponent;
  let fixture: ComponentFixture<UpdateFinancialProjectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateFinancialProjectContainerComponent],
      imports: [HttpClientTestingModule],
      providers: [FinancialProductService],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateFinancialProjectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
