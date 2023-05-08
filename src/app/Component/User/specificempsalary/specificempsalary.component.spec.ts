import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificempsalaryComponent } from './specificempsalary.component';

describe('SpecificempsalaryComponent', () => {
  let component: SpecificempsalaryComponent;
  let fixture: ComponentFixture<SpecificempsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificempsalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificempsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
