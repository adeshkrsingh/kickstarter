import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1dashboardComponent } from './m1dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { HighlighterPipe } from '../pipes/highlighter.pipe';
import { ApiconnectionService } from '../../services/apiconnection.service';

describe('M1dashboardComponent', () => {
  let component: M1dashboardComponent;
  let fixture: ComponentFixture<M1dashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [M1dashboardComponent, HighlighterPipe ],
      imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        InfiniteScrollModule
      ],
      providers: [
        // { provide: APP_BASE_HREF, useValue: '/' },
        // GlobalemitterService,
        ApiconnectionService
      ],
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
