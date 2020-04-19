import { Component } from '@angular/core';
import { SpotyService } from "../services/spoty.service"
import { delay } from "rxjs/operators";
@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css'],
    providers: [SpotyService]
})
export class ReleasesComponent  {
    public cardReleases  = [];
    public spinner = {
      off:true
    }
  constructor(public spoti:SpotyService) {
      this.spoti.changeTextNamePage("Releases")
      // this.spoti.setColorTheme()
      this.albumReleases()
  }


  albumReleases (){
    this.spoti.getNewRelease().pipe(delay(200)).subscribe(data=>this.cardReleases = data, (err)=>{return err}, ()=>{this.spinner.off=false})
  }
}
