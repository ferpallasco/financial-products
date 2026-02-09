import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputFormFieldComponent } from './input-form-field.component';

describe('UiInputFormFieldComponent', () => {
  let component: UiInputFormFieldComponent;
  let fixture: ComponentFixture<UiInputFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInputFormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiInputFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
