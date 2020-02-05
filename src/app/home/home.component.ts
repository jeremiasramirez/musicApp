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
    public lenCardReleases : number;

    public showNameStyle : any = 0;

    constructor(private spoty: SpotyService){

        this.albumReleases()

         
    }
    

    albumReleases (){

       
 
        this.cardReleases= this.spoty.getNewRelease();
        console.log(this.cardReleases)
    }

    showName(){
        
        if (this.showNameStyle == 0){
            this.showNameStyle = 1;
        }
        else{
            this.showNameStyle = 0;
        }
    }   
 

}