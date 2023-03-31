import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationBannerComponent } from './confirmation-banner.component';

describe('ConfirmationBannerComponent', () => {
  let component: ConfirmationBannerComponent;
  let fixture: ComponentFixture<ConfirmationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
