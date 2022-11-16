import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared.module';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './components/app.component';
import { FeatureListComponent } from './features/features/list/list.component';
import { RatingComponent } from './components/rating/rating.component';
import { FeatureComponent } from './features/features/feature/feature.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureListComponent,
    RatingComponent,
    FeatureComponent,
    SkeletonComponent,
  ],
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
