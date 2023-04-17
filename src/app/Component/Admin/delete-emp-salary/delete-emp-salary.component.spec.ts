import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpSalaryComponent } from './delete-emp-salary.component';

describe('DeleteEmpSalaryComponent', () => {
  let component: DeleteEmpSalaryComponent;
  let fixture: ComponentFixture<DeleteEmpSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmpSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmpSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
