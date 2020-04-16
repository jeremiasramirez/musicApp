import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';

import { HomeComponent } from "./home/home.component"

import { InitComponent } from "./initApp/init.component"

import { routing } from "./app.routing";
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// material
import { MatButtonModule } from "@angular/material/button";
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    InitComponent,
    AboutComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
