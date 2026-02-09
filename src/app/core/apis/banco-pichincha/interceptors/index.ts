import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationInterceptor } from './application.interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApplicationInterceptor,
    multi: true,
  },
];
