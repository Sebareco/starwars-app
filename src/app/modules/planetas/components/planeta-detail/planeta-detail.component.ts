import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetaService } from '../../../../modules/planetas/services/planeta.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planeta-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planeta-detail.component.html',
  styleUrl: './planeta-detail.component.css'
})
export class PlanetaDetailComponent implements OnInit {
  planeta: any = null;
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private planetaService: PlanetaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.cargarPlaneta();
    });
  }

  volverAtras(): void {
    this.router.navigate(['/planetas'])
  }

  cargarPlaneta() {
    this.planetaService.getPlanetaById(this.id).subscribe({
      next: (data) => {
        this.planeta = data;
      },
      error: () => {
        this.planeta = null;
      }
    });
  }

  getPlanetImage(): string {
    return ``;
  }

  setDefaultImage(event: any) {
    event.target.src = 'assets/img/no-image.jpg';
  }
}