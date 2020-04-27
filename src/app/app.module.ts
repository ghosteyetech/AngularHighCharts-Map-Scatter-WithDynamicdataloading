import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryMapComponent } from './country-map/country-map.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';
import { DatePipe } from '@angular/common';
import { HighchartsChartModule } from "highcharts-angular";

@NgModule({
  declarations: [
    AppComponent,
    CountryMapComponent,
    ScatterPlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
