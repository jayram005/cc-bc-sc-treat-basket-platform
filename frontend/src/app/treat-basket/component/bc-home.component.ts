import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { ManageInfoService } from '../services/modules/manage-info/manage-info.service';
import { OrderCountService } from '../services/modules/manage-info/order-count.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'code-challenge-bc-home',
  templateUrl: './bc-home.component.html',
  styleUrls: ['./bc-home.component.scss']
})

export class BcHomeComponent implements OnInit {
  showConfirmation = false;
  displayError = false;
  displayDescription = true;
  basketCount = 0;
  orderResponse: any;
  orderCountSvcSub: Subscription;
  constructor(private orderSvc: ManageInfoService, private orderCountSvc: OrderCountService) {

  }

  ngOnInit() {

  }


  isOrderPlaced(event: any) {
    // TO DO : Add event    
    if (event.isSuccess) {
      this.getDeliveredBasketCount();
      this.showConfirmation = true;
      this.displayDescription = false;
      this.displayError = false;
      this.orderResponse = event.response;      
    } else {
      this.displayError = true;
      this.showConfirmation = false;
      this.displayDescription = false;
    }
  }

  addMoreBtnHandler() {
    this.showConfirmation = false;
    this.displayError = false;
    this.displayDescription = true;
  }

  getDeliveredBasketCount() {
    this.orderCountSvcSub = this.orderSvc.getDeliveredBasketCount().subscribe(baskets => {
      this.orderCountSvc.setOrderCount(baskets.orderCount);
    });
  }
}
