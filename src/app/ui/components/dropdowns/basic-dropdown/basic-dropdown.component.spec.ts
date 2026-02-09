import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiBasicDropdownComponent } from './basic-dropdown.component';

describe('BasicDropdownComponent', () => {
  let component: UiBasicDropdownComponent;
  let fixture: ComponentFixture<UiBasicDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBasicDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiBasicDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty options', () => {
    expect(component.options.length).toBe(0);
  });

  it('should set the value correctly', () => {
    const value = 'Option 1';
    component.value = value;
    expect(component.value).toBe(value);
  });

  it('should emit selected value onValueChange', () => {
    spyOn(component.selected, 'emit');
    const itemIndex = 2;
    component.onValueChange(itemIndex);
    expect(component.selected.emit).toHaveBeenCalledWith(itemIndex);
  });
});
