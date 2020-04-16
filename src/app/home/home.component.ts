import { Component } from "@angular/core"
import { SpotyService } from "../services/spoty.service"
import { Subject } from "rxjs";
import { take } from "rxjs/operators";
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
    public obsReleases = new Subject()

    constructor(private spoty: SpotyService){
      this.albumReleases();
      this.getAlbums();
      this.spoty.changeTextNamePage("Music")
    }


    albumReleases (){
      this.spoty.getNewRelease().subscribe(data=>{
        for (let index = 0; index < 1; index++) {
          this.cardReleases[index] = data[index]

        }
      })
    }

    getAlbums(){
      this.spoty.getAlbum().subscribe(resp=>this.albums = resp )

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
