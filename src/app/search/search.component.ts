import { Component  } from '@angular/core';
import { SpotyService } from "../services/spoty.service"
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotyService]
})
export class SearchComponent  {

  constructor(public spoty:SpotyService) {
    this.spoty.changeTextNamePage("Search")
  }

  ngOnInit() {

  }

}
