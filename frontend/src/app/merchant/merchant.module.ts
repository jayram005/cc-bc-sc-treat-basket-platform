import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantComponent } from './component/merchant.component';
import { EnqueryFormComponent } from './component/enquery-form/enquery-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusinessBannerComponent } from './component/business-banner/business-banner.component';
// import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings, RecaptchaFormsModule } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CodeChallengeCommonModule } from '../common/code-challenge-common.module';
import { SolutionsBannerComponent } from './component/solutions-banner/solutions-banner.component';

@NgModule({
  declarations: [MerchantComponent, EnqueryFormComponent, BusinessBannerComponent, SolutionsBannerComponent],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    CodeChallengeCommonModule,
    FormsModule,
    ReactiveFormsModule,
    // RecaptchaModule,
    // RecaptchaFormsModule
  ],
  exports: [],
  providers: [
  //   {
  //   provide: RECAPTCHA_SETTINGS,
  //   useValue: {
  //     siteKey: environment.googleReCaptchaSiteID
  //   } as RecaptchaSettings,
  // },
   DatePipe]
})
export class MerchantModule { }
