import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertType } from '../enums/alert-type.enum';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private notificationSubject = new BehaviorSubject<{
    message: string;
    type: AlertType;
  } | null>(null);

  notification$ = this.notificationSubject.asObservable();

  showNotification(message: string, type: AlertType) {
    this.notificationSubject.next({ message, type });

    setTimeout(() => this.clearNotification(), 3000);
  }

  clearNotification() {
    this.notificationSubject.next(null);
  }
}
