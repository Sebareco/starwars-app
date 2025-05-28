import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  success = '';
  constructor(private auth: AuthService, private router: Router) {}
  onSubmit() {
    this.error = '';
    this.success = '';
    this.auth.login(this.username, this.password).subscribe({
      next: (data: any) => {
        this.auth.setToken(data.access_token || data.token || '');
        this.success = '¡Login exitoso!';
        setTimeout(() => this.router.navigate(['/home']), 1200);
      },
      error: (err: any) => {
        this.error = 'Error al iniciar sesión: ' + (err.error?.message || 'Credenciales incorrectas');
      }
    });
  }
}

