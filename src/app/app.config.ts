import {
  ApplicationConfig,
  importProvidersFrom,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { httpInterceptorProviders } from './core/apis/banco-pichincha/interceptors';
import { registerLocaleData } from '@angular/common';
import localeEsEc from '@angular/common/locales/es-EC';

registerLocaleData(localeEsEc);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    httpInterceptorProviders,
    { provide: LOCALE_ID, useValue: 'es-EC' },
  ],
};
