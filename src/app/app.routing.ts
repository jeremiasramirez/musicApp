import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"



// components
 
import { HomeComponent } from "./home/home.component"


import { InitComponent } from "./initApp/init.component"


const ROUTES : Routes = [

    {path: 'home', component: HomeComponent},
    {path: '', component: InitComponent},
    {path: '**', component: InitComponent}
   

]


export var routing : ModuleWithProviders = RouterModule.forRoot(ROUTES);  

