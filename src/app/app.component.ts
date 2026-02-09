import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { UiAlertComponent } from './ui/components/alerts/alert/alert.component';

@Component({
  selector: 'bp-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, UiAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'financial-products';
}
