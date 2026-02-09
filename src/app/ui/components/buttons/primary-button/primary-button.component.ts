import { Component, Input } from '@angular/core';

@Component({
  selector: 'bp-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class UiPrimaryButtonComponent {
  @Input() disabled = false;
}
