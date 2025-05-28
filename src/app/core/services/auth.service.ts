import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // ... el resto de tus variables

  setToken(token: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('access_token', token);
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('access_token');
    }
    return null;
  }

  logout() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('access_token');
    }
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  login(username: string, password: string): Observable<any> {
    // Esto es ejemplo, puede ser con fetch, http, o un mock
    return this.http.post<any>('url_a_la_api', { username, password });
  }

  constructor(private http: HttpClient) {}
}

