import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCalComponent } from './child-cal.component';

describe('ChildCalComponent', () => {
  let component: ChildCalComponent;
  let fixture: ComponentFixture<ChildCalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildCalComponent]
    });
    fixture = TestBed.createComponent(ChildCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
