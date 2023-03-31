import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsBannerComponent } from './solutions-banner.component';

describe('SolutionsBannerComponent', () => {
  let component: SolutionsBannerComponent;
  let fixture: ComponentFixture<SolutionsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
