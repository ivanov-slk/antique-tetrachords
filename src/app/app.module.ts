import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TranslateService } from './shared/translate.service';
import { TranslatePipe } from './shared/translate.pipe';
import { MelodiesComponent } from './melodies/melodies.component';
import { MelodyListComponent } from './melodies/melody-list/melody-list.component';
import { MelodyItemComponent } from './melodies/melody-list/melody-item/melody-item.component';

export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TranslatePipe,
    MelodiesComponent,
    MelodyListComponent,
    MelodyItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
