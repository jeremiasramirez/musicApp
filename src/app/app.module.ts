import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';

import { HomeComponent } from "./home/home.component"

import { InitComponent } from "./initApp/init.component"
import { SearchComponent } from './search/search.component';
import { ReleasesComponent } from './releases/releases.component';
import { routing } from "./app.routing";
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { AlbumsComponent } from './albums/albums.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// material
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatRippleModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    InitComponent,
    AboutComponent,
    SearchComponent,
    ReleasesComponent,
    ExploreComponent,
    AlbumsComponent

  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
