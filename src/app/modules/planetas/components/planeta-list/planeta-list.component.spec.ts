import { TestBed } from '@angular/core/testing';
import { PlanetaListComponent } from './planeta-list.component';

describe('PlanetaListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetaListComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PlanetaListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});


