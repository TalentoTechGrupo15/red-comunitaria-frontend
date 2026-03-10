import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendimientoCard } from './emprendimiento-card';

describe('EmprendimientoCard', () => {
  let component: EmprendimientoCard;
  let fixture: ComponentFixture<EmprendimientoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmprendimientoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(EmprendimientoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
