import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersetpwdComponent } from './usersetpwd.component';

describe('UsersetpwdComponent', () => {
  let component: UsersetpwdComponent;
  let fixture: ComponentFixture<UsersetpwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersetpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersetpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
