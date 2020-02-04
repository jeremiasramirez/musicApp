import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"



// components

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component"
import { SearchComponent } from "./search/search.component"


const ROUTES : Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: '', component: AppComponent},
    {path: '**', component: AppComponent},
   

]


export var routing : ModuleWithProviders = RouterModule.forRoot(ROUTES);  

