import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emprendimiento } from './emprendimiento';

describe('Emprendimiento', () => {
  let component: Emprendimiento;
  let fixture: ComponentFixture<Emprendimiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emprendimiento],
    }).compileComponents();

    fixture = TestBed.createComponent(Emprendimiento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
