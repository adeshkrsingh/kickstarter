import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader7Component } from './loader7.component';

describe('Loader7Component', () => {
  let component: Loader7Component;
  let fixture: ComponentFixture<Loader7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loader7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loader7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
