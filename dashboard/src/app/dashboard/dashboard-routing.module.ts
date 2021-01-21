import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SublinkComponent } from './sublink/sublink.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    pathMatch: 'full'
  }, {
    path: "sublink", 
    component: SublinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
