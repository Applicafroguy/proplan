import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard').then(m => m.DashboardModule)
  },
  {
    path: 'proposal',
    loadChildren: () => import('./pages/proposal').then(m => m.ProposalModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings').then(m => m.SettingsModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
