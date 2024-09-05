import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () => import('./feature/user/user.component').then((c) => c.UserComponent)
  },
  {
    path: '', redirectTo: 'users', pathMatch: 'full'
  },

];
