import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // AppModule import'ini kontrol edin
import { enableProdMode } from '@angular/core';

// enableProdMode(); // Prodüksiyon modunda kullanmak istiyorsanız bu satırı açın.

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
