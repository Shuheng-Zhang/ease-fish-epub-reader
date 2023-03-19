import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import {WelcomeRoutingModule} from './welcome/welcome-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
    WelcomeRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
