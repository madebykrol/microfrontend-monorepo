import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loadRemoteModule } from './federation-utils';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
        loadRemoteModule({
            remoteEntry: 'http://localhost:5000/remoteEntry.js',
            remoteName: 'dashboard',
            exposedModule: './Dashboard'
        })
        .then(m => {
          console.log(m);
          return m.AppModule
        })
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
