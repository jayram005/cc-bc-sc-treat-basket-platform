import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

export interface Tile {
  urls: string;
  text: string;
}

@Component({
  selector: 'code-challenge-business-banner',
  templateUrl: './business-banner.component.html',
  styleUrls: ['./business-banner.component.scss']
})
export class BusinessBannerComponent implements OnInit {

  tiles: Tile[] = [
      { text: 'layer 0', urls: 'assets/merchant/banner/Layer_0.png' },
      { text: 'layer 1 - brands smartstyle', urls: 'assets/merchant/banner/Layer_0-1.png' },
      { text: 'layer 2 - brands costcutters', urls: 'assets/merchant/banner/Layer_0-2.png' },
      { text: 'layer 3 - brands costcutters', urls: 'assets/merchant/banner/Layer_0-3.png' }
  ];

  bpObserverSvcSub: Subscription;

  constructor() {
   }

  ngOnInit(): void {
  }

}
