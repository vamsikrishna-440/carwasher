import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceloginComponent } from './servicelogin.component';

describe('ServiceloginComponent', () => {
  let component: ServiceloginComponent;
  let fixture: ComponentFixture<ServiceloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
