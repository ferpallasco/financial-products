import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSearcherInputComponent } from './ui-searcher-input.component';

describe('UiSearcherInputComponent', () => {
  let component: UiSearcherInputComponent;
  let fixture: ComponentFixture<UiSearcherInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSearcherInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSearcherInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit valueChange event on input change', () => {
    const inputValue = 'Test Input';
    const valueChangeSpy = spyOn(component.valueChange, 'emit');

    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = inputValue;
    inputElement.dispatchEvent(new Event('input'));

    expect(valueChangeSpy).toHaveBeenCalledWith(inputValue);
  });

  it('should update value on input change', () => {
    const inputValue = 'Test Input';

    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = inputValue;
    inputElement.dispatchEvent(new Event('input'));

    expect(component.value).toEqual(inputValue);
  });

  it('should render the correct placeholder', () => {
    const placeholder = 'Enter a value';
    component.placeholder = placeholder;
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.placeholder).toEqual(placeholder);
  });
});
