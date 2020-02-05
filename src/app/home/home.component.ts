import { Component } from "@angular/core"
import { SpotyService } from "../services/spoty.service"
@Component({

    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'] ,
    providers: [SpotyService]


})


export class HomeComponent{

    public cardReleases : any = [];




    constructor(private spoty: SpotyService){

        this.albumReleases();

         
    }


    albumReleases (){

        this.spoty.getNewRelease().subscribe((response)=>{
            console.log(response)
        })

    }

}