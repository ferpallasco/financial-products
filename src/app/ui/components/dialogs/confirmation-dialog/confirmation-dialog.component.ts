import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiPrimaryButtonComponent } from '../../buttons/primary-button/primary-button.component';
import { UiSecondaryButtonComponent } from '../../buttons/secondary-button/secondary-button.component';
import { UiSplitterComponent } from '../../splitters/splitter/splitter.component';

@Component({
  selector: 'bp-confirmation-dialog',
  standalone: true,
  imports: [
    UiSplitterComponent,
    UiPrimaryButtonComponent,
    UiSecondaryButtonComponent,
  ],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class UiConfirmationDialogComponent {
  @Input() message: string = '¿Estás seguro de que deseas continuar?';
  @Input() visible: boolean = false;

  @Output() onConfirm = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  confirm() {
    this.onConfirm.emit();
    this.visible = false;
  }

  cancel() {
    this.onCancel.emit();
    this.visible = false;
  }
}
