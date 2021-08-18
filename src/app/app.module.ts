import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarService } from './car.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminComponentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    // RouterModule,
    // ReactiveFormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
