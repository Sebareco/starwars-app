import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetaService } from '../../../../modules/planetas/services/planeta.service';
import { CommonModule } from '@angular/common';

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
    private planetaService: PlanetaService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.cargarPlaneta();
    });
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
    return `https://starwars-visualguide.com/assets/img/planets/${this.id}.jpg`;
  }

  setDefaultImage(event: any) {
    event.target.src = 'assets/img/planet-placeholder.png';
  }
}