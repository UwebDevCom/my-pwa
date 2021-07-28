import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SplashComponent } from './splash/splash.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevisionsHeaderComponent } from './components/devisions-header/devisions-header.component';
import { SectionLayoutComponent } from './components/section-layout/section-layout.component';
import { StocksPanelComponent } from './components/stocks-panel/stocks-panel.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SplashComponent,
    DashboardComponent,
    DevisionsHeaderComponent,
    SectionLayoutComponent,
    StocksPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: ()=>import('echarts')
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
