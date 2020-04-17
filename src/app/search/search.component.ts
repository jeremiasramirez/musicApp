import { Component  } from '@angular/core';
import { SpotyService } from "../services/spoty.service"
import { Router } from "@angular/router";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotyService]
})
export class SearchComponent  {

  constructor(public spoty:SpotyService, public router:Router) {
    this.spoty.changeTextNamePage("Search")
  }


  all(){
    this.router.navigate(["search"])
  }

}
