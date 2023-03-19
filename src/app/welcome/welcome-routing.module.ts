import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {}
