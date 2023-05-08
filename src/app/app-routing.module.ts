import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Component/Employees/employee/employee.component';
import { LeaveRequestComponent } from './Component/Admin/leave-request/leave-request.component';
import { LeaveApplyComponent } from './Component/User/leave/leave-apply/leave-apply.component';
import { AssigneeComponent } from './Component/Admin/assignee/assignee.component';
import { AssigneeRoleListComponent } from './Component/Admin/assignee-role-list/assignee-role-list.component';
import { EmployeeSalaryComponent } from './Component/Admin/employee-salary/employee-salary.component';
import { LoginComponent } from './Component/login/login.component';
import { EmployeeSalaryListComponent } from './Component/Admin/employee-salary-list/employee-salary-list.component';
import { AttendanceComponent } from './Component/Admin/attendance/attendance.component';
import { ManagerComponent } from './Component/Admin/manager/manager.component';
import { ManagerListComponent } from './Component/Admin/manager-list/manager-list.component';
import { EditManagerComponent } from './Component/Admin/edit-manager/edit-manager.component';
import { AttendanceAddComponent } from './Component/User/attendance-add/attendance-add.component';
import { CreatePasswordComponent } from './Component/create-password/create-password.component';
import { LeaveApprovedManagerComponent } from './Component/Admin/leave-approved-manager/leave-approved-manager.component';
import { ProfilesComponent } from './Component/profiles/profiles.component';
import { LeaveHistoryComponent } from './Component/User/leave-history/leave-history.component';
import { ManagerApprovedleavehistoryComponent } from './Component/Admin/manager-approvedleavehistory/manager-approvedleavehistory.component';
import { SpecificempsalaryComponent } from './Component/User/specificempsalary/specificempsalary.component';

const routes: Routes = [{
  path: '', component: LoginComponent,
},
{
path:'LeaveApprovedByManager',component:LeaveApprovedManagerComponent
},
{
path:'profiles',component:ProfilesComponent
},
{
  path:'AttendanceSign',component:AttendanceAddComponent
},
{path:'createPassword',component:CreatePasswordComponent},
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
},
{
  path:'EmpSalaryList',component:EmployeeSalaryListComponent
},
{
  path:'EmpAttendanceList',component:AttendanceComponent
},
{
  path:'AddManager',component:ManagerComponent
},{
  path:'getAllManager',component:ManagerListComponent

},
{
  path:'LeaveHistory',component:LeaveHistoryComponent
},
{
  path:'editManager/:manager.managerId',component:EditManagerComponent
},
{
  path:'leaveHistoryManager',component:ManagerApprovedleavehistoryComponent
},
{
  path:'specificEmployeeSalary',component:SpecificempsalaryComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
