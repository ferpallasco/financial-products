import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInfoIconComponent } from './info-icon.component';

describe('UiInfoIconComponent', () => {
  let component: UiInfoIconComponent;
  let fixture: ComponentFixture<UiInfoIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInfoIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiInfoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
