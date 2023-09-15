import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './routeLazy/route1/route1.component';
import { Route2Component } from './routeLazy/route2/route2.component';
import { Route3Component } from './routeLazy/route3/route3.component';

const routes: Routes = [
  {
    path: 'r1',
    loadChildren: () =>
    import('./routeLazy/route1/route1.module').then((m)=>m.Route1Module)
  },
  {
    path: 'r2',
    component: Route2Component
  },
  {
    path: 'r3',
    component: Route3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
