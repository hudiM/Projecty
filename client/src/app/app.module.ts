import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared.module';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './components/app.component';
import { ListComponent } from './components/list/list.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [AppComponent, ListComponent, RatingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
