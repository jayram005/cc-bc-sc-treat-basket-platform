import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueryFormComponent } from './treat-form.component';

describe('EnqueryFormComponent', () => {
  let component: EnqueryFormComponent;
  let fixture: ComponentFixture<EnqueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
