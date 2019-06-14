import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput: FormControl;

  constructor(private state: StateService) {
    this.searchInput = new FormControl('');

    this.searchInput.valueChanges.pipe(debounceTime(300)).subscribe(searchValue => this.state.searchCriteria = searchValue);
  }

  ngOnInit() {
  }

}
