import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialTableSkeletonComponent } from './financial-table-skeleton.component';

describe('FinancialTableSkeletonComponent', () => {
  let component: FinancialTableSkeletonComponent;
  let fixture: ComponentFixture<FinancialTableSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [FinancialTableSkeletonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialTableSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
