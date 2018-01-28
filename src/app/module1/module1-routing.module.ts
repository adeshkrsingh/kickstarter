import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { M1dashboardComponent } from './m1dashboard/m1dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: M1dashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
