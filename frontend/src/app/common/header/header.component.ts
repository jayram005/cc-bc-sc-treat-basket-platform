import { Component, OnInit, NgZone, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'code-challenge-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  searchPlaceSub: Subscription;
  @Input() searchVisible: boolean;

  constructor(private router: Router,
              private ngZone: NgZone) { }

  ngOnInit() {
    // this.searchPlaceSub = this.searchPlaceSvc.getSearchAddress().subscribe(data => {
    //   if (data) {
    //     this.searchPlaceSvc.setInvalidSearch(false);
    //     let curLat = data.location.lat().toString();
    //     let curLng = data.location.lng().toString();
    //     this.ngZone.run(() => this.router.navigate([`search/${curLat}/${curLng}`], {queryParamsHandling: 'merge'}));
    //   }
    // });
  }

  ngOnDestroy() {
    // if (this.searchPlaceSub) {
    //   this.searchPlaceSub.unsubscribe();
    // }
  }

}
