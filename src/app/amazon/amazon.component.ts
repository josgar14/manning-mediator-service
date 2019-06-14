import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from '../state.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {

  searchFor: string;
  subscription: Subscription;

  constructor(private state: StateService) {
    this.subscription = state.getState().subscribe(event => this.searchFor = event);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // a must
  }

}
