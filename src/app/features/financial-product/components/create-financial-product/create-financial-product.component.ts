import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  Subject,
  takeUntil,
} from 'rxjs';
import { InputValidation } from '../../../../core/utils/validations/input-validation';
import { ShortDatePipe } from '../../../../shared/pipes/short-date.pipe';
import { AlertType } from '../../../../ui/components/alerts/enums/alert-type.enum';
import { AlertService } from '../../../../ui/components/alerts/services/alert.service';
import {
  CreateFinancialProduct,
  FinancialProduct,
} from '../../../interfaces/financial-product.interface';
import { FinancialProductService } from '../../services/financial-product.service';
import {
  dateExactlyOneYearValidator,
  dateValidator,
} from '../../validators/date-validator';
import { idExistsValidator } from '../../validators/product-id-exists-validator';

@Component({
  selector: 'bp-create-financial-product',
  templateUrl: './create-financial-product.component.html',
  styleUrl: './create-financial-product.component.scss',
})
export class CreateFinancialProductComponent implements OnInit, OnDestroy {
  @Input() title = 'Formulario de Registro';

  private _formData!: FinancialProduct;

  @Input() get formData() {
    return this._formData;
  }

  set formData(formData: FinancialProduct) {
    this._formData = formData;

    this.formtDates(this.formData);

    this.handleFormDataChanges();
  }

  formBuilder: FormBuilder;
  form!: FormGroup;
  submitting = false;
  verifiyingId = false;

  formSkeleton = {
    id: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
    name: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ],
    ],
    logo: ['', [Validators.required]],
    date_release: ['', [Validators.required, dateValidator()]],
    date_revision: [''],
  };

  InputValidation = InputValidation;

  originalFormData: FinancialProduct | null = null;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private financialProductService: FinancialProductService,
    private alertService: AlertService,
    private shortDatePipe: ShortDatePipe
  ) {
    this.formBuilder = fb;

    this.buildForm();
  }

  ngOnInit(): void {
    this.handleIdChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  formtDates(formData: FinancialProduct) {
    formData.date_release =
      this.shortDatePipe.transform(formData.date_release) || '';

    formData.date_revision =
      this.shortDatePipe.transform(formData.date_revision) || '';
  }

  handleIdChanges() {
    /* Listen changes */
    this.form.controls.id.valueChanges
      .pipe(takeUntil(this.destroy$), distinctUntilChanged())
      .subscribe(() => {
        if (this.originalFormData) {
          return;
        }

        this.verifiyingId = true;
      });

    /* Listen changes and verify after 1 second */
    this.form.controls.id.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        debounceTime(1000)
      )
      .subscribe(() => {
        if (this.form.controls.id.dirty) {
          this.verifyId();
        }
      });

    this.form.controls.date_release.valueChanges
      .pipe(takeUntil(this.destroy$), distinctUntilChanged())
      .subscribe(() => {
        if (this.form.controls.date_release.dirty) {
          this.form.controls.date_revision.markAsDirty();
          this.form.controls.date_revision.updateValueAndValidity();
        }
      });
  }

  verifyId(): void {
    const id = this.form.controls.id.value;

    if (!id) {
      return;
    }

    this.financialProductService
      .verifyIf(id)
      .pipe(
        catchError(() => {
          this.alertService.showNotification(
            'Error al verificar el ID.',
            AlertType.Error
          );
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response === null) {
          this.alertService.showNotification(
            'Error al verificar el ID.',
            AlertType.Error
          );
        }

        this.verifiyingId = false;

        this.updateIdControlValidators(response == true);
      });
  }

  updateIdControlValidators(exists: boolean): void {
    if (exists) {
      this.form.controls.id.setValidators([idExistsValidator(exists)]);
    } else {
      this.form.controls.id.setValidators([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]);
    }

    this.form.controls.id.updateValueAndValidity();
  }

  buildForm() {
    this.form = this.formBuilder.group(this.formSkeleton);

    this.form.controls.date_revision.setValidators([
      Validators.required,
      dateValidator(),
      dateExactlyOneYearValidator(this.form.controls.date_release),
    ]);

    this.form.controls.date_revision.updateValueAndValidity();
  }

  reset() {
    if (this.originalFormData) {
      this.formtDates(this.originalFormData);

      this.form.reset(this.originalFormData);

      return;
    }

    this.form.reset();
  }

  send() {
    if (!this.isFormValid) {
      return;
    }

    this.submitting = true;

    const financialProduct: CreateFinancialProduct = {
      ...this.form.getRawValue(),
    };

    financialProduct.date_release = financialProduct.date_release.replace(
      /\//g,
      '-'
    );
    financialProduct.date_revision = financialProduct.date_revision.replace(
      /\//g,
      '-'
    );

    if (this.formData) {
      this.updateFinancialProduct(financialProduct);

      return;
    }

    this.createFinancialProduct(financialProduct);
  }

  createFinancialProduct(financialProduct: FinancialProduct) {
    this.financialProductService
      .create(financialProduct)
      .pipe(
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((response) => {
        this.submitting = false;

        if (response === null) {
          this.alertService.showNotification(
            'Error al crear el producto financiero.',
            AlertType.Error
          );

          return;
        }

        this.alertService.showNotification(
          'Producto financiero creado con éxito.',
          AlertType.Success
        );

        this.form.reset();
      });
  }

  updateFinancialProduct(financialProduct: FinancialProduct) {
    this.financialProductService
      .update(financialProduct)
      .pipe(
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((response) => {
        this.submitting = false;

        if (response === null) {
          this.alertService.showNotification(
            'Error al actualizar el producto financiero.',
            AlertType.Error
          );

          return;
        }

        this.alertService.showNotification(
          'Producto financiero actualizado con éxito.',
          AlertType.Success
        );

        this.originalFormData = { ...response };

        this.reset();
      });
  }

  get isFormDirty() {
    return this.form.dirty;
  }

  get isFormValid() {
    return this.isFormDirty && this.form.valid && !this.submitting;
  }

  hasErrors(control: any) {
    return control.invalid && (control.dirty || control.touched);
  }

  handleFormDataChanges() {
    this.originalFormData = { ...this.formData };

    if (this.formData) {
      this.form.controls.id.disable();
    }

    this.fillForm();
  }

  fillForm() {
    this.form.patchValue(this.formData);
  }
}
