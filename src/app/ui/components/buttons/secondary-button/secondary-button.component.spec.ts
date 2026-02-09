import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSecondaryButtonComponent } from './secondary-button.component';

describe('UiSecondaryButtonComponent', () => {
  let component: UiSecondaryButtonComponent;
  let fixture: ComponentFixture<UiSecondaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSecondaryButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSecondaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
