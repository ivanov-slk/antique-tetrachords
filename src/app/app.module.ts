import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import * as PlotlyJS from "plotly.js/dist/plotly.js";
import { PlotlyModule } from "angular-plotly.js";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TranslateService } from "./shared/translate.service";
import { TranslatePipe } from "./shared/translate.pipe";
import { MelodiesComponent } from "./melodies/melodies.component";
import { MelodyListComponent } from "./melodies/melody-list/melody-list.component";
import { MelodyItemComponent } from "./melodies/melody-list/melody-item/melody-item.component";
import { MelodyChartComponent } from "./melodies/melody-chart/melody-chart.component";
import { TranslateSyncService } from "./shared/translate-sync.service";
import { SettingsComponent } from "./settings/settings.component";
import { FormsModule } from "@angular/forms";
import { SynthService } from "./melodies/synth.service";

export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use("en");
}

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TranslatePipe,
    MelodiesComponent,
    MelodyListComponent,
    MelodyItemComponent,
    MelodyChartComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    PlotlyModule
  ],
  providers: [
    SynthService,
    TranslateService,
    TranslateSyncService,
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
