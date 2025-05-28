import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NaveService } from '../../../../modules/naves/services/nave.service';
import { CommonModule } from '@angular/common';

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
    private naveService: NaveService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.cargarNave();
    });
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
    return `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`;
  }

  setDefaultImage(event: any) {
    event.target.src = 'assets/img/starship-placeholder.png';
  }
}