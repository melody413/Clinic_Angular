import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCalComponent } from './body-cal.component';

describe('BodyCalComponent', () => {
  let component: BodyCalComponent;
  let fixture: ComponentFixture<BodyCalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCalComponent]
    });
    fixture = TestBed.createComponent(BodyCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
