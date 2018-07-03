import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildToParent2RoutingModule } from './child-to-parent2-routing.module';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [
    CommonModule,
    ChildToParent2RoutingModule
  ],
  declarations: [ChildComponent, ParentComponent]
})
export class ChildToParent2Module { }
