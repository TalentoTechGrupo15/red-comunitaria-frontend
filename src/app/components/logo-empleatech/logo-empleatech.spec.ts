import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoEmpleatech } from './logo-empleatech';

describe('LogoEmpleatech', () => {
  let component: LogoEmpleatech;
  let fixture: ComponentFixture<LogoEmpleatech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoEmpleatech],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoEmpleatech);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
