import { Component  } from '@angular/core';
import { SpotyService } from "../services/spoty.service"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [SpotyService]
})
export class AboutComponent  {

  constructor(public spoti:SpotyService) {
    this.spoti.changeTextNamePage("About")
  }

}
