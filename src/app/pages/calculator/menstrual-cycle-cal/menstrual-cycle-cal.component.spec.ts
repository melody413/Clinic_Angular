import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenstrualCycleCalComponent } from './menstrual-cycle-cal.component';

describe('MenstrualCycleCalComponent', () => {
  let component: MenstrualCycleCalComponent;
  let fixture: ComponentFixture<MenstrualCycleCalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenstrualCycleCalComponent]
    });
    fixture = TestBed.createComponent(MenstrualCycleCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
