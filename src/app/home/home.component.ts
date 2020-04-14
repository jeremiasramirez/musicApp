import { Component } from "@angular/core"
import { SpotyService } from "../services/spoty.service"
import { HttpClient } from "@angular/common/http";
@Component({

    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'] ,
    providers: [SpotyService]


})


export class HomeComponent{

    public cardReleases : any = [];
    public lenCardReleases : number;
    public albums  = [];
    public showNameStyle : any = 0;
    public bandList  : number = 0;
    public textButtonHideOrShow : string = "Playlist"

    constructor(private spoty: SpotyService , public http:HttpClient){

        this.albumReleases()
        this.getAlbums()



    }


    albumReleases (){



        this.cardReleases= this.spoty.getNewRelease();

    }

    getAlbums(){

        this.albums= this.spoty.getAlbum()
        console.log(this.albums)

    }

    showList(){
        if (this.bandList == 0){
            this.bandList = 1;
            this.textButtonHideOrShow  = "Listening"
        }
        else{
            this.bandList = 0;
            this.textButtonHideOrShow  = "Playlist"
        }
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
