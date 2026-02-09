import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface DropdownItem {
  label: string;
  value: unknown;
}

@Component({
  selector: 'bp-basic-dropdown',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './basic-dropdown.component.html',
  styleUrl: './basic-dropdown.component.scss',
})
export class UiBasicDropdownComponent {
  @Input() options: DropdownItem[] = [];

  private _value: unknown;

  @Input() get value() {
    return this._value;
  }

  set value(value: unknown) {
    this._value = value;
    this.selectedValue = value;
  }

  @Output() selected = new EventEmitter<number>();

  selectedValue: unknown;

  onValueChange(item: number): void {
    this.selected.emit(item);
  }
}
