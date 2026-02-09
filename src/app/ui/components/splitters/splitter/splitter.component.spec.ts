import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSplitterComponent } from './splitter.component';

describe('UiSplitterComponent', () => {
  let component: UiSplitterComponent;
  let fixture: ComponentFixture<UiSplitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSplitterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
