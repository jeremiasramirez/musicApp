import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"



// components

import { HomeComponent } from "./home/home.component"
import { InitComponent } from "./initApp/init.component"
import { SearchComponent } from './search/search.component';


const ROUTES : Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'albums', component: HomeComponent},
    {path: 'releases', component: HomeComponent},
    {path: 'albums/track/:id', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'search/track/:track', component: SearchComponent},
    {path: 'search/album/:album', component: SearchComponent},
    {path: 'about', component: HomeComponent},
    {path: '', component: InitComponent},
    {path: '**', component: InitComponent}


]


export var routing : ModuleWithProviders = RouterModule.forRoot(ROUTES);
