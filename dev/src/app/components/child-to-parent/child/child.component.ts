import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message = 'This message is declared in child component and executed in parent component.';
  constructor() { }

  ngOnInit() {
  }

}
