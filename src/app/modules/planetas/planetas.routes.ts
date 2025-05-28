// src/app/modules/planetas/planetas.routes.ts
import { Routes } from '@angular/router';
import { PlanetaListComponent } from './components/planeta-list/planeta-list.component';
import { PlanetaDetailComponent } from './components/planeta-detail/planeta-detail.component';

export const PLANETAS_ROUTES: Routes = [
  { path: '', component: PlanetaListComponent },
  { path: ':id', component: PlanetaDetailComponent }
];
