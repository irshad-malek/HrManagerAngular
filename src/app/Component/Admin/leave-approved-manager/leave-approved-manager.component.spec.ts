import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApprovedManagerComponent } from './leave-approved-manager.component';

describe('LeaveApprovedManagerComponent', () => {
  let component: LeaveApprovedManagerComponent;
  let fixture: ComponentFixture<LeaveApprovedManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveApprovedManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveApprovedManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
