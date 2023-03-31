import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'code-challenge-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  fbId: string;
  curYear: number;
  constructor() {
    this.curYear = new Date().getFullYear();
  }

  ngOnInit() {
  }
}
