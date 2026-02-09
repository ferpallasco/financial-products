import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractControl } from '@angular/forms';
import { UiInputErrorMessagesComponent } from './input-error-messages.component';

describe('UiInputErrorMessagesComponent', () => {
  let component: UiInputErrorMessagesComponent;
  let fixture: ComponentFixture<UiInputErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInputErrorMessagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiInputErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the fc input correctly', () => {
    const mockFc = {} as AbstractControl;
    component.fc = mockFc;
    expect(component.fc).toBe(mockFc);
  });
});
