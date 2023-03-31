import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BcHomeComponent } from './component/bc-home.component';

// TODO: child routing using children component.
const merchantRoutes: Routes = [
  { path: '', component: BcHomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(merchantRoutes)
  ],
  exports: [RouterModule]
})
export class BcHomeRoutingModule { }
