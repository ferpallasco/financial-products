import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiMoreActionsButtonComponent } from './more-actions-button.component';

describe('UiMoreActionsButtonComponent', () => {
  let component: UiMoreActionsButtonComponent;
  let fixture: ComponentFixture<UiMoreActionsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiMoreActionsButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiMoreActionsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
