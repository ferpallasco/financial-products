import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';
import { AlertType } from '../enums/alert-type.enum';

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should clear notification when clearNotification is called', (done) => {
    service.showNotification('Another message', AlertType.Success);

    service.notification$.subscribe((notification) => {
      if (notification) {
        service.clearNotification();
        service.notification$.subscribe((notificationAfterClear) => {
          expect(notificationAfterClear).toBeNull();
          done();
        });
      }
    });
  });
});
