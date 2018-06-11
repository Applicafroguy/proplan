import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard#DashboardModule'
  },
  {
    path: 'proposal',
    loadChildren: './pages/proposal#ProposalModule'
  },
  {
    path: 'settings',
    loadChildren: './pages/settings#SettingsModule'
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
