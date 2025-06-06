import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../../modules/personas/services/persona.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persona-list.component.html',
  styleUrl: './persona-list.component.css'
})
export class PersonaListComponent implements OnInit {
  personas: any[] = [];
  search = '';
  loading = false;
  error = '';

  constructor(private personaService: PersonaService, private router: Router, private location: Location) {}

  ngOnInit() {
    this.cargarPersonas();
  }
  volverHome() {
    this.router.navigate(['/home'])
  }

  cargarPersonas() {
    this.personaService.getPersonas(this.search).subscribe({
      next: (data) => {
        this.personas = data.results;
        this.error = '';
      },
      error: (err) => {
        console.error('ERROR AL CARGAR PERSONAS', err);
        this.error = 'Error al cargar personas';
      }
    });
  }

  verDetalle(url: string) {
    const id = this.getIdFromUrl(url);
    this.router.navigate(['/personas', id]);
  }

  getIdFromUrl(url: string): string {
    return url.split('/').filter(Boolean).pop() ?? '';
  }

  getPersonImage(url: string): string {
    const id = this.getIdFromUrl(url);
    return '';
  }

  setDefaultImage(event: any) {
    event.target.src = 'assets/img/no-image.jpg';
  }
}
