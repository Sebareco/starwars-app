// src/app/modules/planetas/services/planeta.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlanetaService {
  private apiUrl = `${environment.apiUrl}${environment.apiEndpoints.planets}`;

  constructor(private http: HttpClient) {}

  getPlanetas(search: string = ''): Observable<any> {
    // Si la API acepta búsqueda, sino, dejar sin search
    const url = search ? `${this.apiUrl}/?search=${search}` : this.apiUrl;
    return this.http.get<any>(url);
  }

  getPlanetaById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
