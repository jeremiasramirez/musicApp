import { Component  } from '@angular/core';
import { SpotyService } from "../services/spoty.service"
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [SpotyService]
})
export class AlbumsComponent  {

  constructor( public spoti:SpotyService) {
    this.spoti.changeTextNamePage("Albums")
    // this.spoti.setColorTheme()
   }


}
