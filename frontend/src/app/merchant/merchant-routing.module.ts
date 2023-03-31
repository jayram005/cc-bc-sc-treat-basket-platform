import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantComponent } from './component/merchant.component';

// TODO: child routing using children component.
const merchantRoutes: Routes = [
  { path: '', component: MerchantComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(merchantRoutes)
  ],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
