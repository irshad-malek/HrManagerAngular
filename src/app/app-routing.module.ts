import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Component/Employees/employee/employee.component';
import { LeaveRequestComponent } from './Component/Admin/leave-request/leave-request.component';
import { LeaveApplyComponent } from './Component/User/leave/leave-apply/leave-apply.component';
import { AssigneeComponent } from './Component/Admin/assignee/assignee.component';
import { AssigneeRoleListComponent } from './Component/Admin/assignee-role-list/assignee-role-list.component';
import { EmployeeSalaryComponent } from './Component/Admin/employee-salary/employee-salary.component';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [{
  path: '', component: LoginComponent,
},
{
  path:'leaveRequest',component:LeaveRequestComponent
},
{
  path:'leaveApply',component:LeaveApplyComponent
},
{
  path:'manageEmployee',component:EmployeeComponent
},
{
  path:'Assignee',component:AssigneeComponent
},
{
  path:'AssigneeRoleList',component:AssigneeRoleListComponent
},
{
  path:'addEmpSalary',component:EmployeeSalaryComponent
},
{
  path:'login',component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
