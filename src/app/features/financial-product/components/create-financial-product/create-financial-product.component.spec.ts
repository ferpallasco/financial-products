import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ShortDatePipe } from '../../../../shared/pipes/short-date.pipe';
import { AlertService } from '../../../../ui/components/alerts/services/alert.service';
import { FinancialProduct } from '../../../interfaces/financial-product.interface';
import { FinancialProductModule } from '../../financial-product.module';
import { CreateFinancialProductComponent } from './create-financial-product.component';

describe('CreateFinancialProductComponent', () => {
  let component: CreateFinancialProductComponent;
  let fixture: ComponentFixture<CreateFinancialProductComponent>;
  let alertService: AlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FinancialProductModule,
        HttpClientTestingModule,
      ],
      declarations: [CreateFinancialProductComponent],
      providers: [FormBuilder, AlertService, ShortDatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFinancialProductComponent);
    component = fixture.componentInstance;
    alertService = TestBed.inject(AlertService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with correct structure', () => {
    component.buildForm();
    expect(component.form.controls.id).toBeDefined();
    expect(component.form.controls.name).toBeDefined();
    expect(component.form.controls.description).toBeDefined();
    expect(component.form.controls.logo).toBeDefined();
    expect(component.form.controls.date_release).toBeDefined();
    expect(component.form.controls.date_revision).toBeDefined();
  });

  it('should reset the form to original form data if available', () => {
    const formData: FinancialProduct = {
      id: '1',
      name: 'Product 1',
      description: 'Description',
      logo: 'logo.png',
      date_release: '2024/01/01',
      date_revision: '2024/01/02',
    } as FinancialProduct;

    component.originalFormData = formData;

    component.reset();

    expect(component.form.controls.id.value).toEqual('1');
  });

  it('should reset the form to empty values if no original form data', () => {
    component.originalFormData = null;

    component.reset();

    expect(component.form.controls.id.value).toEqual(null);
  });

  it('should clear async validators if ID does not exist', () => {
    const exists = false;
    component.updateIdControlValidators(exists);
    expect(component.form.controls.id.asyncValidator).toBeNull();
  });

  it('should clear async validators if ID does exists', () => {
    const exists = true;
    component.updateIdControlValidators(exists);
    expect(component.form.controls.id.errors).toBeDefined();
  });

  it('should handle form data changes and disable ID control', () => {
    const formData: FinancialProduct = {
      id: '1',
      name: 'Product 1',
      description: 'Description',
      logo: 'logo.png',
      date_release: '2024/01/01',
      date_revision: '2024/01/02',
    } as FinancialProduct;

    component.formData = formData;

    component.handleFormDataChanges();

    expect(component.originalFormData).toEqual(formData);
    expect(component.form.controls.id.disabled).toBeTruthy();
    expect(component.form.controls.id.value).toEqual('1');
  });

  it('should fill form with provided formData', () => {
    const formData: FinancialProduct = {
      id: '1',
      name: 'Product 1',
      description: 'Description',
      logo: 'logo.png',
      date_release: '2024/01/01',
      date_revision: '2024/01/02',
    } as FinancialProduct;
    component.formData = formData;

    component.fillForm();

    expect(component.form.controls.name.value).toEqual('Product 1');
  });

  it('should return true if form is dirty', () => {
    component.form.markAsDirty();
    expect(component.isFormDirty).toBeTrue();
  });

  it('should return false if form is not dirty', () => {
    component.form.markAsPristine();
    expect(component.isFormDirty).toBeFalse();
  });

  it('should return true if form is valid and not submitting', () => {
    component.form.markAsDirty();
    component.form.setValue({
      id: '123',
      name: 'Valid Product',
      description: 'Valid Description',
      logo: 'logo.png',
      date_release: '2024/01/01',
      date_revision: '2025-01-02',
    });

    component.submitting = false;

    expect(component.form.controls.id.status).toEqual('VALID');
    expect(component.form.controls.name.status).toEqual('VALID');
    expect(component.form.controls.description.status).toEqual('VALID');
  });

  it('should return false if form is invalid', () => {
    component.form.setValue({
      id: '',
      name: 'Short',
      description: 'Short',
      logo: '',
      date_release: '',
      date_revision: '',
    });
    expect(component.isFormValid).toBeFalse();
  });

  it('should return true if control is invalid and dirty or touched', () => {
    const control = component.form.controls.id;
    control.setValue('');
    control.markAsDirty();
    control.markAsTouched();
    expect(component.hasErrors(control)).toBeTrue();
  });

  it('should return false if control is valid and dirty or touched', () => {
    const control = component.form.controls.id;
    control.setValue('validId');
    control.markAsDirty();
    control.markAsTouched();
    expect(component.hasErrors(control)).toBeFalse();
  });
});
