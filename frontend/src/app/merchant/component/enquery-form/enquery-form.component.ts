import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { BusinessQueryForm, BusinessEnqueryRequest, BusinessEnqueryResponse } from '../../../common/models/businessEnquiry';
// import { AnalyticsService } from 'src/app/common/analytics/service/amplitude.service';
// import { SalonService } from 'src/app/common/mediation/salon.services';

@Component({
  selector: 'code-challenge-enquery-form',
  templateUrl: './enquery-form.component.html',
  styleUrls: ['./enquery-form.component.scss'],
  animations: [
    trigger('onClickTechErr', [
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ]),
    trigger('onClickInfoMsg', [
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class EnqueryFormComponent implements OnInit, OnDestroy {

  isPhone: boolean;
  @Input() techErrorMsg: boolean;
  mName: FormControl;
  fname: FormControl;
  phoneNo: any;
  email: FormControl;
  businessType: FormControl;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}$/;
  namePattern = /^[a-zA-Z ]*$/;
  urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  merchantForm: FormGroup;
  businesQueryData: BusinessQueryForm;
  errorTitle: string;
  errorSubtitle: string;
  infoMsg: string;
  bpObserverSvcSub: Subscription;
  recaptchaReactive: FormControl;
  businessAddress: FormControl;
  businessUrl: FormControl;

  constructor(private fb: FormBuilder,
              private bpObserverSvc: BreakpointObserver,
              // private salonSvc: SalonService,
              // private amplitudeSvc: AnalyticsService
              ) {
    this.bpObserverSvcSub = bpObserverSvc
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (!state.matches) {
          this.isPhone = true;
        } else {
          this.isPhone = false;
        }
      });
  }

  ngOnInit(): void {
    this.merchantForm = this.fb.group({
      mName: new FormControl('', [Validators.required,
        Validators.pattern(this.namePattern)
      ]),
      fname: new FormControl('', [Validators.required,
      Validators.pattern(this.namePattern)
      ]),
      phoneNo: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      businessType: new FormControl('', Validators.required),
      recaptchaReactive: new FormControl(null, Validators.required),
      businessAddress: new FormControl(''),
      businessUrl: new FormControl('', Validators.pattern(this.urlPattern))
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.merchantForm.controls[controlName].hasError(errorName);
  }

  onClickTechErr() {
    this.techErrorMsg = false;
  }

  onClickInfoMsg() {
    this.infoMsg = null;
  }

  onSubmit() {
  //   this.businesQueryData = this.merchantForm.value;
  //   this.businesQueryData.phoneNo = this.businesQueryData.phoneNo.match(/\d/g).join('');

  //   if (this.businesQueryData) {
  //     let payload = {} as BusinessEnqueryRequest;
  //     let response: BusinessEnqueryResponse;
  //     payload.merchantName = this.businesQueryData.mName;
  //     payload.contactName = this.businesQueryData.fname;
  //     payload.contactPhone = this.businesQueryData.phoneNo;
  //     payload.contactEmail = this.businesQueryData.email;
  //     payload.typeOfBusiness = this.businesQueryData.businessType;
  //     payload.businessUrl = this.businesQueryData.businessUrl;
  //     payload.businessAddress = this.businesQueryData.businessAddress;
  //     payload.source = 'opensalon';

  //     this.amplitudeSvc.addEventToAnalytics({
  //       eventName: 'list_business_submit_tap',
  //       data: { merchantName: payload.merchantName}
  //     });
  //     let result = this.salonSvc.createBusinessEnquiry(payload).toPromise();
  //     result.then(apiResponse => {
  //       response = apiResponse;
  //       if (response.id && response.id > 0) {
  //         this.infoMsg = 'Thank you for getting in touch. One of our executives will get back in touch with you soon!';
  //         this.amplitudeSvc.addEventToAnalytics({
  //           eventName: 'list_business_submit_success',
  //           data: { merchantName: payload.merchantName}
  //         });
  //         this.hideSucessMsg();
  //       } else {
  //         this.infoMsg = 'We appreciate you contacting us. One of our executives will get back in touch with you soon!';
  //         this.hideSucessMsg();
  //       }
  //       this.merchantForm.reset();
  //     })
  //     .catch((err) => {
  //       this.displayErrorMessage(400);
  //       this.amplitudeSvc.addEventToAnalytics({
  //         eventName: 'list_business_submit_error',
  //         data: { merchantName: payload.merchantName}
  //       });
  //       console.log(err);
  //     });
  //   } else {
  //     this.displayErrorMessage(1000);
  //   }
  // }

  // displayErrorMessage(code: number) {
  //   this.techErrorMsg = true;
  //   if (code === 1000) {
  //     this.errorTitle = 'Please enter all the required information.';
  //     this.errorSubtitle = 'OK';
  //   } else {
  //     this.errorTitle = 'There was an error with this request.';
  //     this.errorSubtitle = 'TRY AGAIN LATER';
  //   }
  //   setTimeout (() => {
  //     this.techErrorMsg = false;
  //   }, 2000);
  }

  hideSucessMsg() {
    this.techErrorMsg = false;
    setTimeout (() => {
      this.infoMsg = null;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.bpObserverSvcSub) { this.bpObserverSvcSub.unsubscribe(); }
  }
}
