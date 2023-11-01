import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${window.scrollY + 100}px`
})

