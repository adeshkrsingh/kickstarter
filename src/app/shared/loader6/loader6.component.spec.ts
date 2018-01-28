import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader6Component } from './loader6.component';

describe('Loader6Component', () => {
  let component: Loader6Component;
  let fixture: ComponentFixture<Loader6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loader6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loader6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
