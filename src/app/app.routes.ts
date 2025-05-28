import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./modules/login/components/login/login.component').then(m => m.LoginComponent) },
  { path: 'home', loadComponent: () => import('./modules/home/components/home/home.component').then(m => m.HomeComponent) },
  { path: 'personas', loadChildren: () => import('./modules/personas/personas.routes').then(m => m.PERSONAS_ROUTES) },
  { path: 'planetas', loadChildren: () => import('./modules/planetas/planetas.routes').then(m => m.PLANETAS_ROUTES) },
  { path: 'naves', loadChildren: () => import('./modules/naves/naves.routes').then(m => m.NAVES_ROUTES) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

