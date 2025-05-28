import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../../../modules/personas/services/persona.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-detail.component.html',
  styleUrl: './persona-detail.component.css'
})
export class PersonaDetailComponent implements OnInit {
  persona: any = null;
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.cargarPersona();
    });
  }
  volverAtras(): void {
    this.router.navigate(['/personas'])
  }

  cargarPersona() {
    this.personaService.getPersonaById(this.id).subscribe({
      next: (data) => {
        this.persona = data;
      },
      error: () => {
        this.persona = null;
      }
    });
  }

  getPersonImage(): string {
    return ``;
  }
  setDefaultImage(event: any) {
    event.target.src = 'assets/img/no-image.jpg';
  }
}
