import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderCountService {
  private orderCount = new Subject<number>();
  constructor() { }

  setOrderCount(count: number) {
    this.orderCount.next(count);
  }

  getOrderCount() {
    return this.orderCount;
  }
  
}
