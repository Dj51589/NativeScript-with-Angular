import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from '@src/app/dashboard/dashboard.component';
import {HeroDetailComponent} from '@src/app/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
