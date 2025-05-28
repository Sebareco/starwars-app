// src/app/modules/naves/services/nave.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NaveService {
  private apiUrl = `${environment.apiUrl}${environment.apiEndpoints.starships}`;

  constructor(private http: HttpClient) {}

  getNaves(search: string = ''): Observable<any> {
    const url = search ? `${this.apiUrl}/?search=${search}` : this.apiUrl;
    return this.http.get<any>(url);
  }

  getNaveById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}

