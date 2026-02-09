import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'bp-input-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './input-form-field.component.html',
  styleUrl: './input-form-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputFormFieldComponent),
      multi: true,
    },
  ],
})
export class UiInputFormFieldComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  @Input() label = '';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() hasError = false;
  @Input() minlength = 100;
  @Input() maxlength = 100;

  form: FormGroup;
  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      control: [''],
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.emitFormValues(this.form.controls.control.value);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /* Start ControlValueAccessor implementation. */
  onChange = (value?: string) => {};

  onTouched = () => {};

  writeValue(value?: string) {
    this.form.controls.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (value?: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.form.controls.control[isDisabled ? 'disable' : 'enable']();
  }

  emitFormValues(value: string) {
    if (this.form.pristine) {
      return;
    }
    this.onChange(value);
    this.onTouched();
    this.form.markAsPristine();
  }
}
