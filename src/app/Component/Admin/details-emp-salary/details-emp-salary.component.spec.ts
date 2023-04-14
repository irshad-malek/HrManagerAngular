import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmpSalaryComponent } from './details-emp-salary.component';

describe('DetailsEmpSalaryComponent', () => {
  let component: DetailsEmpSalaryComponent;
  let fixture: ComponentFixture<DetailsEmpSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEmpSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEmpSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
