import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
declare let anime: any;
export interface Tile {
  urls: string;
  text: string;
  position: string;
}
@Component({
  selector: 'code-challenge-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'confirmation-banner-top', urls: 'assets/merchant/banner/confirmation-banner-right.png', position: 'top' },
    { text: 'confirmation-banner-basket', urls: 'assets/merchant/banner/treat-basket.png', position: 'bottom' }
  ];
  bpObserverSvcSub: Subscription;
  constructor() {
  }

  ngOnInit(): void {
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
}