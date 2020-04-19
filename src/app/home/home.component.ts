import { Component } from "@angular/core"
import { SpotyService } from "../services/spoty.service"
import { Router} from "@angular/router"
import { Subject, timer } from "rxjs";
 import { take ,delay} from "rxjs/operators";
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
    public spinner = {
      off:true
    }
    public spinner2 = {
      off:true
    }
    constructor(private spoty: SpotyService, public router:Router){
      this.albumReleases();
      this.getAlbums();
      this.spoty.changeTextNamePage("Music")
      // this.spoty.setColorTheme()
    }


    albumReleases (){
      this.spoty.getNewRelease().subscribe(data=>{
        for (let index = 0; index < 3; index++) {
          this.cardReleases[index] = data[index]

        }
      }, (err)=>{return err}, ()=>{this.spinner.off=false})
    }

    getAlbums(){
      this.spoty.getAlbum().pipe(delay(800)).subscribe(resp=>this.albums = resp, (err)=>{return err}, ()=>{this.spinner2.off=false} )

    }

    showAlbum(id:number){
      timer(1000).subscribe(timing=>this.router.navigate(["albums/track", id]))
      this.spinner2.off=true
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
