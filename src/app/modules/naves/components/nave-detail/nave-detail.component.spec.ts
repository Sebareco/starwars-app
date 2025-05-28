import { TestBed } from '@angular/core/testing';
import { NaveDetailComponent } from './nave-detail.component';

describe('NaveDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaveDetailComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NaveDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

