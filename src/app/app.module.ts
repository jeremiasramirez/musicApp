import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { SearchComponent } from "./search/search.component"
import { HomeComponent } from "./home/home.component"

import { InitComponent } from "./initApp/init.component"

import { routing } from "./app.routing"

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    SearchComponent,
    InitComponent

  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
