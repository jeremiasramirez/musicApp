import { Injectable} from "@angular/core"
import { ajax } from 'rxjs/ajax'
import { delay,pluck } from 'rxjs/operators'


@Injectable()


export class SpotyService{

    public newReleases :string = "assets/datapi/albumRelease.json"
    constructor(){

    }
    public changeTextNamePage(name:string){
        document.getElementById('idTheme').innerText=name
    }
    public setColorTheme(theme:string="theme--blue", menu:string="menu--blue"){
      let theme_ = document.getElementById("theme")
      let menu_ = document.getElementById("menu")
      theme_.className=theme
      menu_.className=menu
    }
    getNewRelease(){

      return ajax.get(this.newReleases).pipe(pluck('response'),delay(1000))
    }
    getAlbum(){
      return  ajax.get("assets/datapi/playlist.json").pipe(pluck('response'))
    }


}
