import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = environment.authToken;
  private isBrowser: boolean;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {this.isBrowser = isPlatformBrowser(this.platformId);}

  login(username: string, password: string): Observable<any> {
    if (environment.useMockLogin) {
      if (username === 'admin' && password === '1234') {
        return of({ access_token: 'mock-token' });
      } else {
        return throwError(() => ({ error: { message: 'Credenciales inválidas' } }));
      }
    } else {
      return this.http.post(environment.helipagos.login, { username, password });
    }
  }

  setToken(token: string) {
    if (this.isBrowser) {
      sessionStorage.setItem('access_token', token);
    }
  }

  getToken(): string | null {
    return this.isBrowser ? sessionStorage.getItem('access_token') : null;
  }

  logout() {
    if (this.isBrowser) {
      sessionStorage.removeItem('access_token');
    }
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
