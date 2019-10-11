import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlderhistoryComponent } from './olderhistory.component';

describe('OlderhistoryComponent', () => {
  let component: OlderhistoryComponent;
  let fixture: ComponentFixture<OlderhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlderhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
