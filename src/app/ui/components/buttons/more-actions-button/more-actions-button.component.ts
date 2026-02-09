import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bp-more-actions-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './more-actions-button.component.html',
  styleUrl: './more-actions-button.component.scss',
})
export class UiMoreActionsButtonComponent {
  @Output() editItem = new EventEmitter<void>();
  @Output() deleteItem = new EventEmitter<void>();

  dropdownVisible = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
