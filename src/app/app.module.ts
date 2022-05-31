import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './_helper/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PiechartComponent } from './piechart/piechart.component';
import { OrgtreeComponent } from './orgtree/orgtree.component';
import { NgChartsModule } from 'ng2-charts';
import { AddkpiComponent } from './addkpi/addkpi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    PiechartComponent,
    OrgtreeComponent,
    AddkpiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,NgChartsModule
  ],
  providers: [authInterceptorProviders,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
