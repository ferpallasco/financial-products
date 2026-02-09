import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'bp-input-error-messages',
  standalone: true,
  imports: [],
  templateUrl: './input-error-messages.component.html',
  styleUrl: './input-error-messages.component.scss',
})
export class UiInputErrorMessagesComponent {
  @Input() fc!: AbstractControl;

  public stringHelper!: string;
}
