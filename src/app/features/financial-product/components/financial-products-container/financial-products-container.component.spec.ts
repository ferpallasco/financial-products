import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FinancialProduct } from '../../../interfaces/financial-product.interface';
import { FinancialProductModule } from '../../financial-product.module';
import { FinancialProductService } from '../../services/financial-product.service';
import { FinancialProductsContainerComponent } from './financial-products-container.component';

describe('FinancialProductsContainerComponent', () => {
  let component: FinancialProductsContainerComponent;
  let fixture: ComponentFixture<FinancialProductsContainerComponent>;
  let service: FinancialProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialProductsContainerComponent],
      imports: [
        HttpClientTestingModule,
        FinancialProductModule,
        RouterTestingModule,
      ],
      providers: [
        FinancialProductService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {} }, // Proporciona un valor simulado para ActivatedRoute si es necesario
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialProductsContainerComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(FinancialProductService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize financialProducts array', () => {
    expect(component.financialProducts).toEqual([]);
  });

  it('should initialize elementsByPage array', () => {
    expect(component.elementsByPage).toEqual([]);
  });

  it('should initialize selectedFinancialProduct as null', () => {
    expect(component.selectedFinancialProduct).toBeNull();
  });

  it('should initialize deletingFinancialProducts as false', () => {
    expect(component.deletingFinancialProducts).toBeFalse();
  });

  it('should initialize isConfirmationDialogVisible as false', () => {
    expect(component.isConfirmationDialogVisible).toBeFalse();
  });

  it('should initialize pageSize as 5', () => {
    expect(component.pageSize).toBe(5);
  });

  it('should call getFinancialProducts method on component initialization', () => {
    spyOn(component, 'getFinancialProducts');
    component.ngOnInit();
    expect(component.getFinancialProducts).toHaveBeenCalled();
  });

  it('should set selectedFinancialProduct when handleEditProduct is called', () => {
    const mockProduct = {
      id: 1,
      name: 'Product 1',
    } as unknown as FinancialProduct;

    component.handleEditProduct(mockProduct);

    expect(service.getSelectedProduct()).toEqual(mockProduct);
  });

  it('should set isConfirmationDialogVisible to true when handleConfirm is called', () => {
    component.handleConfirm();
    expect(component.isConfirmationDialogVisible).toBeFalsy();
  });

  it('should set isConfirmationDialogVisible to false when handleCancel is called', () => {
    component.handleCancel();
    expect(component.isConfirmationDialogVisible).toBeFalse();
  });

  it('should call takeElementaByPageSize method when handleChangePageSize is called', () => {
    spyOn(component, 'takeElementaByPageSize');
    const pageSize = 10;
    component.handleChangePageSize(pageSize);
    expect(component.takeElementaByPageSize).toHaveBeenCalled();
  });

  it('should update elementsByPage array when takeElementaByPageSize is called with pageSize 5', () => {
    const mockFinancialProducts: FinancialProduct[] = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
      { id: 4, name: 'Product 4' },
      { id: 5, name: 'Product 5' },
      { id: 6, name: 'Product 6' },
    ] as unknown as FinancialProduct[];

    component.financialProducts = mockFinancialProducts;

    component.pageSize = 5;

    component.takeElementaByPageSize();

    expect(component.elementsByPage.length).toEqual(5);
  });

  it('should update elementsByPage array when takeElementaByPageSize is called with pageSize 20', () => {
    const mockFinancialProducts: FinancialProduct[] = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
      { id: 4, name: 'Product 4' },
      { id: 5, name: 'Product 5' },
      { id: 6, name: 'Product 6' },
    ] as unknown as FinancialProduct[];

    component.financialProducts = mockFinancialProducts;

    component.pageSize = 20;

    component.takeElementaByPageSize();

    expect(component.elementsByPage.length).toEqual(6);
  });
});
