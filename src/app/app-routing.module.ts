import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [

  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'user',
    loadChildren: './module1/module1.module#Module1Module',
  },
  // {
  //   path: 'game',
  //   loadChildren: './game/game.module#GameModule',
  // },
  // {
  //   path: 'p1',
  //   loadChildren: './shared/shared.module#SharedModule',
  // },
  {
    path: '**',
    component: PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
