import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./modules/login/components/login/login.component').then(m => m.LoginComponent) },
  { path: 'home', canActivate: [AuthGuard],loadComponent: () => import('./modules/home/components/home/home.component').then(m => m.HomeComponent) },
  { path: 'personas', canActivate: [AuthGuard], loadChildren: () => import('./modules/personas/personas.routes').then(m => m.PERSONAS_ROUTES) },
  { path: 'planetas', canActivate: [AuthGuard], loadChildren: () => import('./modules/planetas/planetas.routes').then(m => m.PLANETAS_ROUTES) },
  { path: 'naves', canActivate: [AuthGuard], loadChildren: () => import('./modules/naves/naves.routes').then(m => m.NAVES_ROUTES) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', redirectTo: 'home' }
];

