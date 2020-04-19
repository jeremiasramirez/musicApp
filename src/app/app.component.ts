import { Component } from '@angular/core';
import { SpotyService } from "./services/spoty.service"
@Component({
  selector: 'musicRoot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotyService]
})
export class AppComponent {
  title = 'musicApp';
  constructor(public spoti:SpotyService){}
  ngOnInit(){
    let iter = 0;
    let ca = document.getElementById("colorApp").addEventListener("click", ()=>{
      if (iter==0){
        iter = 1;
        this.spoti.setColorTheme('theme--black','menu--black')
        document.getElementById("body").style.backgroundColor="rgba(0%, 0%, 0%, 80%)"
      }

      else{
        iter = 0
        this.spoti.setColorTheme('theme--blue','menu--blue')
        document.getElementById("body").style.backgroundColor="white"

      }

    })

  }
}
