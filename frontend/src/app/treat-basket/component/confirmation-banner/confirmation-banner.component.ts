import { Component, OnInit,Input } from '@angular/core';
import * as moment from 'moment';
declare let anime: any;
export interface Tile {
  urls: string;
  text: string;
  bannerText:string;
}
@Component({
  selector: 'code-challenge-confirmation-banner',
  templateUrl: './confirmation-banner.component.html',
  styleUrls: ['./confirmation-banner.component.scss']
})
export class ConfirmationBannerComponent implements OnInit {
  @Input() orderResponse:any;
  successText = '';
  successHeading ="Successfully Added Treat to Basket"
  basketCount = 0;
  tiles: Tile = { text: 'order count', urls: 'assets/merchant/banner/confirmation-banner.png',bannerText:''};
  pageHeadingText = `Hurray`;
 
  constructor() {
  }

  ngOnInit(): void { 
    const convertedDateTime =  moment.utc(this.orderResponse.deivery_date).format('MM/DD/YYYY HH:MM');
    this.successText = `Basket containing Tablets, Vitamins, 
                        Supplements will be delivered to ${this.orderResponse.name}
                        living at ${this.orderResponse.delivery_address} on ${convertedDateTime}`;
    this.getDeliveredBasketCount();  
  }

  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.text-animation');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.text-animation .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
      }).add({
        targets: '.text-animation',
        opacity: 0,
        duration: 800,
        easing: "easeOutExpo",
        delay: 800
      });
  }

  getDeliveredBasketCount() {
    this.basketCount = 100;
  }
}
