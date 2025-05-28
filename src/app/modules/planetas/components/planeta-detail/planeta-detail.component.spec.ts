import { TestBed } from '@angular/core/testing';
import { PlanetaDetailComponent } from './planeta-detail.component';

describe('PlanetaDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetaDetailComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PlanetaDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});


