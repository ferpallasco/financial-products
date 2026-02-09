import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  DropdownItem,
  UiBasicDropdownComponent,
} from '../../dropdowns/basic-dropdown/basic-dropdown.component';

export const OPTIONS: DropdownItem[] = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '20', value: 20 },
];

@Component({
  selector: 'bp-footer-table',
  standalone: true,
  imports: [UiBasicDropdownComponent],
  templateUrl: './footer-table.component.html',
  styleUrl: './footer-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFooterTableComponent {
  @Input() itemsNumber = 0;

  @Output() selectedPageSize = new EventEmitter<number>();

  pageSizeOptions = OPTIONS;
  pageSize = this.pageSizeOptions[0].value;
}
