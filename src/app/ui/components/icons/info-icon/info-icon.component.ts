import { Component, Input } from '@angular/core';

@Component({
  selector: 'bp-info-icon',
  standalone: true,
  imports: [],
  templateUrl: './info-icon.component.html',
  styleUrl: './info-icon.component.scss',
})
export class UiInfoIconComponent {
  @Input() description: string = '';
}
