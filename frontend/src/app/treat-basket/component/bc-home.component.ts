import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'code-challenge-bc-home',
  templateUrl: './bc-home.component.html',
  styleUrls: ['./bc-home.component.scss']
})

export class BcHomeComponent implements OnInit{
  showConfirmation = false;
  displayError = true;
  displayDescription = false;
  constructor() {}

  ngOnInit(){}
  
  isOrderPlaced(event: boolean){   
    // TO DO : Add event
     this.showConfirmation = true;
     this.displayDescription = false;
  }

  addMoreBtnHandler(){
    this.showConfirmation = false;
    this.displayError = false;
    this.displayDescription = true;
  }
}
