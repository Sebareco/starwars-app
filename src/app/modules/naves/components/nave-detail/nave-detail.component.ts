import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NaveService } from '../../../../modules/naves/services/nave.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nave-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nave-detail.component.html',
  styleUrl: './nave-detail.component.css'
})
export class NaveDetailComponent implements OnInit {
  nave: any = null;
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private naveService: NaveService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.cargarNave();
    });
  }

  volverAtras(): void {
    this.router.navigate(['/naves'])
  }

  cargarNave() {
    this.naveService.getNaveById(this.id).subscribe({
      next: (data) => {
        this.nave = data;
      },
      error: () => {
        this.nave = null;
      }
    });
  }

  getNaveImage(): string {
    return ``;
  }

  setDefaultImage(event: any) {
    event.target.src = 'assets/img/no-image.jpg';
  }
}