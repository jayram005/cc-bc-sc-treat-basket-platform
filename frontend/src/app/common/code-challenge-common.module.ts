import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { WhiteSpaceTrimPipe } from './pipe/whitespace-trim.pipe';
import { FormatTimePipe } from './pipe/formatTime.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/service/spinner.service';
import { SubSpinnerComponent } from './spinner/sub-spinner/sub-spinner.component';
import { AddressTitleCasePipe } from './pipe/addressTitleCase.pipe';
import { FormatPhoneDirective } from './directives/formatPhone.directive';
import { RouterModule } from '@angular/router';
import { DigitOnlyDirective } from './directives/digitsOnly.directive';
import { MaterialModule } from '../material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [WhiteSpaceTrimPipe, SpinnerComponent,
    FormatTimePipe, SubSpinnerComponent, AddressTitleCasePipe,
    FormatPhoneDirective, DigitOnlyDirective,
    FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MaterialModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    AddressTitleCasePipe,
    FormatPhoneDirective,
    DigitOnlyDirective,
    WhiteSpaceTrimPipe, SpinnerComponent,
    FormatTimePipe, SubSpinnerComponent,
    FooterComponent, HeaderComponent
  ],
  providers: [SpinnerService, AddressTitleCasePipe]
})
export class CodeChallengeCommonModule { }