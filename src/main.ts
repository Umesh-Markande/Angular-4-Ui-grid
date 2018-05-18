import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Router } from "@angular/router";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { UpgradeModule } from "@angular/upgrade/static";
import { initUiGrid } from './uigrid';

if (environment.production) {
  enableProdMode();
}

// intialize ui grid
initUiGrid();

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['uigridmodule']);
  upgrade.ngZone.run(() => {
    upgrade.injector.get(Router).initialNavigation();
  });
});
