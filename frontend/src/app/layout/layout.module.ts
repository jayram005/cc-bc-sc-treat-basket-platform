import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { CodeChallengeCommonModule } from '../common/code-challenge-common.module';
import { LayoutComponent } from './component/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CodeChallengeCommonModule
  ]
})
export class LayoutModule { }
