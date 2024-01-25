import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineComponent } from './medicine.component';

describe('MedicineComponent', () => {
  let component: MedicineComponent;
  let fixture: ComponentFixture<MedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicineComponent]
    });
    fixture = TestBed.createComponent(MedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
