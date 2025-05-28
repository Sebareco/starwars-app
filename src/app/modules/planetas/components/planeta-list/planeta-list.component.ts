import { Component, OnInit } from '@angular/core';
import { PlanetaService } from '../../../../modules/planetas/services/planeta.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-planeta-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './planeta-list.component.html',
  styleUrl: './planeta-list.component.css'
})
export class PlanetaListComponent implements OnInit {
  planetas: any[] = [];
  search = '';
  error = '';

  constructor(private planetaService: PlanetaService, private router: Router) {}

  ngOnInit() {
    this.cargarPlanetas();
  }

  volverHome(){
    this.router.navigate(['/home'])
  }

  cargarPlanetas() {
    this.planetaService.getPlanetas(this.search).subscribe({
      next: (data) => {
        this.planetas = data.results;
        this.error = '';
      },
      error: (err) => {
        console.error('ERROR AL CARGAR PLANETAS', err);
        this.error = 'Error al cargar planetas';
      }
    });
  }

  verDetalle(url: string) {
    const id = this.getIdFromUrl(url);
    this.router.navigate(['/planetas', id]);
  }

  getIdFromUrl(url: string): string {
    return url.split('/').filter(Boolean).pop() ?? '';
  }

  getPlanetImage(url: string): string {
    const id = this.getIdFromUrl(url);
    return ``;
  }

  setDefaultImage(event: any) {
    event.target.src = 'assets/img/no-image.jpg';
  }
}


