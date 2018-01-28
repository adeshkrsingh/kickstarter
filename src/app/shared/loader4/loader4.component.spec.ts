import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader4Component } from './loader4.component';

describe('Loader4Component', () => {
  let component: Loader4Component;
  let fixture: ComponentFixture<Loader4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loader4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loader4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
