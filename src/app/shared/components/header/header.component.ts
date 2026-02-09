import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImagesConfig } from '../../../core/images-config/images-config';

@Component({
  selector: 'bp-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  ImagesConfig = ImagesConfig;

  logo = ImagesConfig.logo;
}
