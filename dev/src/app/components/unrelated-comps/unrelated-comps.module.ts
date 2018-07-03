import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnrelatedCompsRoutingModule } from './unrelated-comps-routing.module';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';

@NgModule({
  imports: [
    CommonModule,
    UnrelatedCompsRoutingModule
  ],
  declarations: [ParentComponent, SiblingComponent]
})
export class UnrelatedCompsModule { }
