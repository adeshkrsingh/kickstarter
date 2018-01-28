import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Module1RoutingModule } from './module1-routing.module';
import { M1dashboardComponent } from './m1dashboard/m1dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  declarations: [M1dashboardComponent, HighlighterPipe]
})
export class Module1Module { }
