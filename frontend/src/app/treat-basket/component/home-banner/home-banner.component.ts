import { AfterViewInit, Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ManageInfoService } from '../../services/modules/manage-info/manage-info.service';
import { OrderCountService } from '../../services/modules/manage-info/order-count.service';
declare let anime: any;
export interface Tile {
  urls: string;
  text: string;
}

@Component({
  selector: 'code-challenge-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit,AfterViewInit,OnDestroy {
  basketCount = 0;
  tiles: Tile = { text: 'order count', urls: 'assets/merchant/banner/count-banner.png'};
  orderCountSvcSub: Subscription;
  orderSvcSub: Subscription;
  constructor(private orderCountSvc:OrderCountService,private orderSvc:ManageInfoService) {
  }

  ngOnInit(): void { 
    console.log('in child');
     this.orderCountSvcSub = this.orderCountSvc.getOrderCount().subscribe(orderCount => {   
         this.basketCount = +orderCount;   
      }
    );    
  }

  ngAfterViewInit(): void {
    this.getDeliveredBasketCount();
  }
  
  getDeliveredBasketCount() {
    this.orderSvcSub = this.orderSvc.getDeliveredBasketCount().subscribe(baskets => {
      this.orderCountSvc.setOrderCount(+baskets.orderCount);
    });
  }

  ngOnDestroy(): void {
    if(this.orderCountSvcSub){
      this.orderCountSvcSub.unsubscribe();
    }
    if(this.orderSvcSub){
      this.orderSvcSub.unsubscribe();
    }
  }
}