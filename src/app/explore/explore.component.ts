import { Component, OnInit } from '@angular/core';
import { SpotyService } from "../services/spoty.service"

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [SpotyService]
})
export class ExploreComponent implements OnInit {

  constructor(public spoti:SpotyService) {
    this.spoti.changeTextNamePage("Explore")
    // this.spoti.setColorTheme('theme--red','menu--red')
  }

  ngOnInit() {


  }

}
