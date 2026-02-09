import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bp-splitter',
  standalone: true,
  imports: [],
  templateUrl: './splitter.component.html',
  styleUrl: './splitter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSplitterComponent {}
