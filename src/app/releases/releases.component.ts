import { Component } from '@angular/core';
import { SpotyService } from "../services/spoty.service"

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css'],
    providers: [SpotyService]
})
export class ReleasesComponent  {
    public cardReleases  = [];

  constructor(public spoti:SpotyService) {
      this.spoti.changeTextNamePage("Releases")
      this.albumReleases()
  }


  albumReleases (){
    this.spoti.getNewRelease().subscribe(data=>this.cardReleases = data)
  }
}
