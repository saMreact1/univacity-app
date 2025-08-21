import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { arrowBack, checkmarkCircleOutline, chevronDown, close, closeCircle, funnelOutline, heartOutline, languageOutline, locationOutline, reorderThree, reorderThreeOutline, reorderThreeSharp, schoolOutline, shareOutline, shareSocialOutline, swapVertical, timeOutline } from 'ionicons/icons';

addIcons({
  'arrow-back': arrowBack,
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
  'chevron-down': chevronDown
});


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient()
  ],
});
