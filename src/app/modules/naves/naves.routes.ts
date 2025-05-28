import { Routes } from '@angular/router';
import { NaveListComponent } from './components/nave-list/nave-list.component';
import { NaveDetailComponent } from './components/nave-detail/nave-detail.component';

// Exporta las rutas para este feature
export const NAVES_ROUTES: Routes = [
  { path: '', component: NaveListComponent },
  { path: ':id', component: NaveDetailComponent }
];
