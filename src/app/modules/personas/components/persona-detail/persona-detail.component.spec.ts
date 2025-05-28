import { TestBed } from '@angular/core/testing';
import { PersonaDetailComponent } from './persona-detail.component';

describe('PersonaDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaDetailComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PersonaDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

