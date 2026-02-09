import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiConfirmationDialogComponent } from './confirmation-dialog.component';

describe('UiConfirmationDialogComponent', () => {
  let component: UiConfirmationDialogComponent;
  let fixture: ComponentFixture<UiConfirmationDialogComponent>;
  let confirmSpy: jasmine.Spy;
  let cancelSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiConfirmationDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    confirmSpy = spyOn(component.onConfirm, 'emit').and.callThrough();
    cancelSpy = spyOn(component.onCancel, 'emit').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onConfirm and hide the component when confirm() is called', () => {
    component.confirm();

    expect(confirmSpy).toHaveBeenCalled();
    expect(component.visible).toBeFalse();
  });

  it('should emit onCancel and hide the component when cancel() is called', () => {
    component.cancel();

    expect(cancelSpy).toHaveBeenCalled();
    expect(component.visible).toBeFalse();
  });
});
