import { TestBed } from '@angular/core/testing';
import { NaveListComponent } from './nave-list.component';

describe('NaveListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaveListComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NaveListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});


