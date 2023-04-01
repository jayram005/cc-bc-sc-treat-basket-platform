import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'code-challenge-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.scss']
})
export class AlertMsgComponent implements OnInit {

  private subscription: Subscription;
  message: any;
  private timer: Observable<any>;

  constructor(private alertService: AlertService) {
    // subscribe to alert messages
    this.subscription = alertService.getMessage().subscribe(message => {
      this.message = message;
    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // unsubscribe on destroy to prevent memory leaks
    this.subscription.unsubscribe();
  }

  closeMessage() {
    this.alertService.clearAlertMessage();    
  } 


}
