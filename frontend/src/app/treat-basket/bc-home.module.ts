import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BcHomeRoutingModule } from './bc-home-routing.module';
import { BcHomeComponent } from './component/bc-home.component';
import { EnqueryFormComponent } from './component/treat-form/treat-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeBannerComponent } from './component/home-banner/home-banner.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CodeChallengeCommonModule } from '../common/code-challenge-common.module';
import { BannerDescriptionComponent } from './component/home-banner-description/banner-description.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { ConfirmationBannerComponent } from './component/confirmation-banner/confirmation-banner.component';
import { MaterialModule } from '../material/material.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { CancelBannerComponent } from './component/cancel-banner/cancel-banner.component';
@NgModule({
  declarations: [BcHomeComponent, EnqueryFormComponent, HomeBannerComponent, BannerDescriptionComponent, ConfirmationComponent, ConfirmationBannerComponent, CancelBannerComponent],
  imports: [
    CommonModule,
    BcHomeRoutingModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    CodeChallengeCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMaterialTimepickerModule
  ],
  exports: [],
  providers: [DatePipe]
})
export class BcHomeModule { }
