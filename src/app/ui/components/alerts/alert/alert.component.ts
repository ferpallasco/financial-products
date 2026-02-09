import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { AlertService } from '../services/alert.service';
import { AlertType } from '../enums/alert-type.enum';

@Component({
  selector: 'bp-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class UiAlertComponent implements OnInit {
  message: string | null = null;
  type: AlertType | null = null;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.notification$.subscribe((notification) => {
      if (notification) {
        this.message = notification.message;
        this.type = notification.type;
      } else {
        this.message = null;
        this.type = null;
      }
    });
  }
}
