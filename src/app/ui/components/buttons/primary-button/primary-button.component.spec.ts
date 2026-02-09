import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPrimaryButtonComponent } from './primary-button.component';

describe('UiPrimaryButtonComponent', () => {
  let component: UiPrimaryButtonComponent;
  let fixture: ComponentFixture<UiPrimaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPrimaryButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiPrimaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
