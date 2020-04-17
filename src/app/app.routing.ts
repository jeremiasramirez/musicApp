import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"



// components

import { HomeComponent } from "./home/home.component"
import { InitComponent } from "./initApp/init.component"
import { SearchComponent } from './search/search.component';
import { ExploreComponent } from './explore/explore.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { ReleasesComponent } from './releases/releases.component';
const ROUTES : Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'albums', component: AlbumsComponent},
    {path: 'explore', component: ExploreComponent},
    {path: 'releases', component: ReleasesComponent},
    {path: 'albums/track/:id', component: AlbumsComponent},
    {path: 'search', component: SearchComponent},
    {path: 'about', component: AboutComponent},
    {path: '', component: InitComponent},
    {path: '**', component: InitComponent}


]


export var routing : ModuleWithProviders = RouterModule.forRoot(ROUTES);
