import { Routes } from '@angular/router';

export const PERSONAS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/persona-list/persona-list.component').then(m => m.PersonaListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./components/persona-detail/persona-detail.component').then(m => m.PersonaDetailComponent)
  }
];
