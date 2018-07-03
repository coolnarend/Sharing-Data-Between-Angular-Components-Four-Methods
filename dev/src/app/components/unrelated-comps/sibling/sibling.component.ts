import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  message: string;

  constructor(private dta: DataService) { }

  ngOnInit() {
    this.dta.currentMessage.subscribe(message => this.message = message);
  }

  newMessage(e) {
    // this.dta.changeMessage('This is the new modified data coming from
    // one of the components and updating the service with the new data.');
    this.dta.changeMessage(e);
  }

}

