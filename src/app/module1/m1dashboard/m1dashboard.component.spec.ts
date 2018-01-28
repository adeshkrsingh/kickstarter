import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1dashboardComponent } from './m1dashboard.component';

describe('M1dashboardComponent', () => {
  let component: M1dashboardComponent;
  let fixture: ComponentFixture<M1dashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1dashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1dashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
