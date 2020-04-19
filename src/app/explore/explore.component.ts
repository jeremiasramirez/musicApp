import { Component, OnInit } from '@angular/core';
import { SpotyService } from "../services/spoty.service"
import { timer } from "rxjs";
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [SpotyService]
})
export class ExploreComponent implements OnInit {
  public spinner = {
    off:true
  }
  constructor(public spoti:SpotyService) {
    this.spoti.changeTextNamePage("Explore")
    timer(700).subscribe(timing=>this.spinner.off=false)
  }

  ngOnInit() {


  }

}
