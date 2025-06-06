import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonaService {
  private baseUrl = `${environment.apiUrl}${environment.apiEndpoints.people}`;
  constructor(private http: HttpClient) {}

  getPersonas(search: string = ''): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?search=${search}`);
  }
  getPersonaById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }
}



