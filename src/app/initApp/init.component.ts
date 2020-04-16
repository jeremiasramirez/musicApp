import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { timer } from "rxjs";
@Component({

    selector: 'init',
    templateUrl: './init.component.html',
    styleUrls: ['./init.component.css']


})


export class InitComponent{
    public hideContent = {
      off: true
    }
    constructor(private ROUTING : Router){}


    goToHome(){
      this.hideContent.off=false;
      timer(1000).subscribe(timing => this.ROUTING.navigate(["home"]))

    }
}
