import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Component/Employees/employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { AddEmployeeComponent } from './Component/Employees/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DetailsEmployeeComponent } from './Component/Employees/details-employee/details-employee.component';
import { DeleteEmployeeComponent } from './Component/Employees/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './Component/Employees/edit-employee/edit-employee.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeaveRequestComponent } from './Component/Admin/leave-request/leave-request.component';
import { LeaveApplyComponent } from './Component/User/leave/leave-apply/leave-apply.component';
import { AssigneeComponent } from './Component/Admin/assignee/assignee.component';
import { AssigneeRoleListComponent } from './Component/Admin/assignee-role-list/assignee-role-list.component';
import { EmployeeSalaryComponent } from './Component/Admin/employee-salary/employee-salary.component';
import { LoginComponent } from './Component/login/login.component';
import { EmployeeSalaryListComponent } from './Component/Admin/employee-salary-list/employee-salary-list.component';
import { UpdateEmpSalaryComponent } from './Component/Admin/update-emp-salary/update-emp-salary.component';
import { DetailsEmpSalaryComponent } from './Component/Admin/details-emp-salary/details-emp-salary.component';
import { DeleteEmpSalaryComponent } from './Component/Admin/delete-emp-salary/delete-emp-salary.component';
import { LoginInterceptor } from './Interceptors/login.interceptor';
import { ManagerComponent } from './Component/Admin/manager/manager.component';
import { ManagerListComponent } from './Component/Admin/manager-list/manager-list.component';
import { AttendanceComponent } from './Component/Admin/attendance/attendance.component';
import { EditManagerComponent } from './Component/Admin/edit-manager/edit-manager.component';
import { AttendanceAddComponent } from './Component/User/attendance-add/attendance-add.component';
import { DatePipe } from '@angular/common';
import { CreatePasswordComponent } from './Component/create-password/create-password.component';
import { EmployeeEmailExistDirective } from './Directive/employee-email-exist.directive';
import { LeaveApprovedManagerComponent } from './Component/Admin/leave-approved-manager/leave-approved-manager.component';

@NgModule({

  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    FooterComponent,
    AddEmployeeComponent,
    DetailsEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    LeaveRequestComponent,
    LeaveApplyComponent,
    AssigneeComponent,
    AssigneeRoleListComponent,
    EmployeeSalaryComponent,
    LoginComponent,
    EmployeeSalaryListComponent,
    UpdateEmpSalaryComponent,
    DetailsEmpSalaryComponent,
    DeleteEmpSalaryComponent,
    ManagerComponent,
    ManagerListComponent,
    AttendanceComponent,
    EditManagerComponent,
    AttendanceAddComponent,
    CreatePasswordComponent,
    EmployeeEmailExistDirective,
    LeaveApprovedManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,    
    FormsModule,
    NgMultiSelectDropDownModule,
    ToastrModule.forRoot()
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
     }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ AddEmployeeComponent,DetailsEmployeeComponent,DeleteEmployeeComponent,EditEmployeeComponent]
})
export class AppModule { }
