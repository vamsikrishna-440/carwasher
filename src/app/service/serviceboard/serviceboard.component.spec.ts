import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceboardComponent } from './serviceboard.component';

describe('ServiceboardComponent', () => {
  let component: ServiceboardComponent;
  let fixture: ComponentFixture<ServiceboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
