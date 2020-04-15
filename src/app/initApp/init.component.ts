import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { timer } from "rxjs";
@Component({

    selector: 'init',
    templateUrl: './init.component.html',
    styleUrls: ['./init.component.css']


})


export class InitComponent{

    constructor(private ROUTING : Router){}


    goToHome(){

      timer(600).subscribe(timing => this.ROUTING.navigate(["home"]))

    }
}
