import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesetpwdComponent } from './servicesetpwd.component';

describe('ServicesetpwdComponent', () => {
  let component: ServicesetpwdComponent;
  let fixture: ComponentFixture<ServicesetpwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesetpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesetpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
