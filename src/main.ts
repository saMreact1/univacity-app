import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { IonicModule } from '@ionic/angular';
import { arrowBack, arrowForward, calendarOutline, checkmarkCircleOutline, checkmarkDone, chevronBack, chevronDown, chevronForward, chevronUp, close, eyeOutline, funnelOutline, heartOutline, informationCircleOutline, languageOutline, locationOutline, schoolOutline, shareSocialOutline, swapVertical, timeOutline, trendingUp } from 'ionicons/icons';
import { importProvidersFrom } from '@angular/core';

addIcons({
  'arrow-back': arrowBack,
  'arrow-forward': arrowForward,
  'heart-outline': heartOutline,
  'funnel': funnelOutline,
  'reorder': swapVertical,
  'close': close,
  'partner': checkmarkCircleOutline,
  'location-outline': locationOutline,
  'school-outline': schoolOutline,
  'time-outline': timeOutline,
  'language-outline': languageOutline,
  'share-outline': shareSocialOutline,
  'chevron-down': chevronDown,
  'chevron-back': chevronBack,
  'chevron-up': chevronUp,
  'eye': eyeOutline,
  'trending-up': trendingUp,
  'calendar-outline': calendarOutline,
  'check': checkmarkDone,
  'information-circle-outline': informationCircleOutline,
  'chevron-forward': chevronForward
});


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    importProvidersFrom(IonicModule.forRoot())
  ],
});
