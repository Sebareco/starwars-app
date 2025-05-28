import { Component, OnInit } from '@angular/core';
import { NaveService } from '../../../../modules/naves/services/nave.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nave-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nave-list.component.html',
  styleUrl: './nave-list.component.css'
})
export class NaveListComponent implements OnInit {
  naves: any[] = [];
  search = '';
  error = '';

  constructor(private naveService: NaveService, private router: Router) {}

  ngOnInit() {
    this.cargarNaves();
  }

  volverHome() {
    this.router.navigate(['/home'])
  }

  cargarNaves() {
    this.naveService.getNaves(this.search).subscribe({
      next: (data) => {
        this.naves = data.results;
        this.error = '';
      },
      error: (err) => {
        console.error('ERROR AL CARGAR NAVES', err);
        this.error = 'Error al cargar naves';
      }
    });
  }

  verDetalle(url: string) {
    const id = this.getIdFromUrl(url);
    this.router.navigate(['/naves', id]);
  }

  getIdFromUrl(url: string): string {
    return url.split('/').filter(Boolean).pop() ?? '';
  }

  getNaveImage(url: string): string {
    const id = this.getIdFromUrl(url);
    return ``;
  }

  setDefaultImage(event: any) {
    event.target.src = 'assets/img/no-image.jpg';
  }
}