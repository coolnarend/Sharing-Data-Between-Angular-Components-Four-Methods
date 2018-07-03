import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  message: string;

  @ViewChild(ChildComponent) child;

  constructor(private cdr: ChangeDetectorRef) { }

  // 2 ways of modufying the value for messahe variable

  ngOnInit() {
    // method 1
    // this.updateMessage();
  }

  ngAfterViewInit() {
    // method 2
    this.message = this.child.message;
    this.cdr.detectChanges();
  }

  updateMessage() {
    return this.message = this.child.message;
  }

}
