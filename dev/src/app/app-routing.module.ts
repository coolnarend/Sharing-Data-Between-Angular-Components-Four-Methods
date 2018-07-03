import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'parentToChild',
    loadChildren: './components/parent-to-child/parent-to-child.module#ParentToChildModule'
  },
  {
    path: 'childToParent',
    loadChildren: './components/child-to-parent/child-to-parent.module#ChildToParentModule'
  },
  {
    path: 'childToParent2',
    loadChildren: './components/child-to-parent2/child-to-parent2.module#ChildToParent2Module'
  },
  {
    path: 'unrelated-comps',
    loadChildren: './components/unrelated-comps/unrelated-comps.module#UnrelatedCompsModule'
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [HomeComponent],
  exports: [RouterModule, HomeComponent]
})
export class AppRoutingModule { }
