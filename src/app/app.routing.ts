import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent }   from './about/about.component';
import { PlayerListComponent } from './player-list/player-list.component'
// import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'player-list',
    component: PlayerListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
