import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFooterTableComponent } from './footer-table.component';

describe('UiFooterTableComponent', () => {
  let component: UiFooterTableComponent;
  let fixture: ComponentFixture<UiFooterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFooterTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiFooterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
