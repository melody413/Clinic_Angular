import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObulationCalcComponent } from './obulation-calc.component';

describe('ObulationCalcComponent', () => {
  let component: ObulationCalcComponent;
  let fixture: ComponentFixture<ObulationCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObulationCalcComponent]
    });
    fixture = TestBed.createComponent(ObulationCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
