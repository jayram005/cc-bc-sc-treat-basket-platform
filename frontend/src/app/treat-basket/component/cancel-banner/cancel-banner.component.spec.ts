import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelBannerComponent } from './cancel-banner.component';

describe('CancelBannerComponent', () => {
  let component: CancelBannerComponent;
  let fixture: ComponentFixture<CancelBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
