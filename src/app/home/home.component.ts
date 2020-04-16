import { Component } from "@angular/core"
import { SpotyService } from "../services/spoty.service"

@Component({

    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'] ,
    providers: [SpotyService]

})
export class HomeComponent{

    public cardReleases  = [];
    public lenCardReleases : number;
    public albums  = [];
    public showNameStyle : any = 0;
    public bandList  : number = 0;


    constructor(private spoty: SpotyService){
      this.albumReleases();
      this.getAlbums();
      this.spoty.changeTextNamePage("Music")
    }


    albumReleases (){
      this.spoty.getNewRelease().subscribe(data=>this.cardReleases = data)
    }

    getAlbums(){
      this.spoty.getAlbum().subscribe(resp=>this.albums = resp)
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
