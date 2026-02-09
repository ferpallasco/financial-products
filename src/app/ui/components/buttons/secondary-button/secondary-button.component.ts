import { Component, Input } from '@angular/core';

@Component({
  selector: 'bp-secondary-button',
  standalone: true,
  imports: [],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss',
})
export class UiSecondaryButtonComponent {
  @Input() disabled = false;
}
