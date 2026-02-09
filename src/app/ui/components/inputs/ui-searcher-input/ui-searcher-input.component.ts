import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bp-ui-searcher-input',
  standalone: true,
  imports: [],
  templateUrl: './ui-searcher-input.component.html',
  styleUrl: './ui-searcher-input.component.scss',
})
export class UiSearcherInputComponent {
  @Input() placeholder: string = '';

  @Output() valueChange = new EventEmitter<string>();

  value = '';

  onInputChange(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;

    this.valueChange.emit(this.value);
  }
}
