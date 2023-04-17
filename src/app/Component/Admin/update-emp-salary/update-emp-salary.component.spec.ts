import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpSalaryComponent } from './update-emp-salary.component';

describe('UpdateEmpSalaryComponent', () => {
  let component: UpdateEmpSalaryComponent;
  let fixture: ComponentFixture<UpdateEmpSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmpSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
