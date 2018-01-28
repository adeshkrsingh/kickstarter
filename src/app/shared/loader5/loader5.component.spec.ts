import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader5Component } from './loader5.component';

describe('Loader5Component', () => {
  let component: Loader5Component;
  let fixture: ComponentFixture<Loader5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loader5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loader5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
