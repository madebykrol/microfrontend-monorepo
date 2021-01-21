import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SublinkComponent } from './sublink/sublink.component';

@NgModule({
  declarations: [DashboardComponent, SublinkComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],exports: [SublinkComponent]
})
export class DashboardModule { }
