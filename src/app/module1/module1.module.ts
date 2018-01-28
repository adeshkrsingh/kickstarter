import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Module1RoutingModule } from './module1-routing.module';
import { M1dashboardComponent } from './m1dashboard/m1dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    SharedModule
  ],
  declarations: [M1dashboardComponent]
})
export class Module1Module { }
