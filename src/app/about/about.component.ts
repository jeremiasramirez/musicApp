import { Component  } from '@angular/core';
import { SpotyService } from "../services/spoty.service"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [SpotyService]
})
export class AboutComponent  {
  public spinner={
    off:true
  }
  constructor(public spoti:SpotyService) {
    this.spoti.changeTextNamePage("About")
    this.spoti.setColorTheme()
    setTimeout(() => {
        this.spinner.off=false
    }, 800);
  }

}
