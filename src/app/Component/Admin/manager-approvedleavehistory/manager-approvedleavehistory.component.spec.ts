import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerApprovedleavehistoryComponent } from './manager-approvedleavehistory.component';

describe('ManagerApprovedleavehistoryComponent', () => {
  let component: ManagerApprovedleavehistoryComponent;
  let fixture: ComponentFixture<ManagerApprovedleavehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerApprovedleavehistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerApprovedleavehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
