import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bp-financial-table-skeleton',
  templateUrl: './financial-table-skeleton.component.html',
  styleUrl: './financial-table-skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinancialTableSkeletonComponent {}
