import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
declare let anime: any;
export interface Tile {
  urls: string;
  text: string;
}
@Component({
  selector: 'code-challenge-cancel-banner',
  templateUrl: './cancel-banner.component.html',
  styleUrls: ['./cancel-banner.component.scss']
})
export class CancelBannerComponent implements OnInit {

  pageHeadingText = `Oops! Something went wrong`;
  cancelledText = `This treat hasn't been assigned to anyone yet. Please try again later.`;
  basketCount = 100;
  tiles: Tile = { text: 'order count', urls: 'assets/merchant/banner/cancel-banner.png'};
  bpObserverSvcSub: Subscription;
  constructor() {
  }

  ngOnInit(): void {   
  }

  ngAfterViewInit(): void {
    // Wrap every letter in a span
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
}
