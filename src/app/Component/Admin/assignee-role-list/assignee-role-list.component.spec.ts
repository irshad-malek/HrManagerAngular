import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneeRoleListComponent } from './assignee-role-list.component';

describe('AssigneeRoleListComponent', () => {
  let component: AssigneeRoleListComponent;
  let fixture: ComponentFixture<AssigneeRoleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigneeRoleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigneeRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
