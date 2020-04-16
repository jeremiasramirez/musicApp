import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"



// components

import { HomeComponent } from "./home/home.component"


import { InitComponent } from "./initApp/init.component"


const ROUTES : Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'album/:id', component: HomeComponent},
    {path: 'albums/track/:id', component: HomeComponent},
    {path: 'search/:all', component: HomeComponent},
    {path: 'search/track/:track', component: HomeComponent},
    {path: 'search/album/:album', component: HomeComponent},
    {path: 'about', component: HomeComponent},
    {path: '', component: InitComponent},
    {path: '**', component: InitComponent}


]


export var routing : ModuleWithProviders = RouterModule.forRoot(ROUTES);
