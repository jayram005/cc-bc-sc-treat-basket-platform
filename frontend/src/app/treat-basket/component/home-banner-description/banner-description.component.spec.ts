import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDescriptionComponent } from './banner-description.component';

describe('SolutionsBannerComponent', () => {
  let component: BannerDescriptionComponent;
  let fixture: ComponentFixture<BannerDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
