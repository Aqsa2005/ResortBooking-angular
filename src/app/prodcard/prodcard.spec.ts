import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodcard } from './prodcard';

describe('Prodcard', () => {
  let component: Prodcard;
  let fixture: ComponentFixture<Prodcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prodcard],
    }).compileComponents();

    fixture = TestBed.createComponent(Prodcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
