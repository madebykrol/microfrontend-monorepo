import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loadRemoteModule } from './federation-utils';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
        loadRemoteModule({  
            remoteName: 'dashboard',
            exposedModule: './Dashboard'
        })
        .then(m => {
          return m.DashboardModule
        })
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
