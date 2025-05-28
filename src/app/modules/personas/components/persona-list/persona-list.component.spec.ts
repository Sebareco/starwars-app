import { TestBed } from '@angular/core/testing';
import { PersonaListComponent } from './persona-list.component';

describe('PersonaListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaListComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PersonaListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

