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
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ AddEmployeeComponent,DetailsEmployeeComponent,DeleteEmployeeComponent,EditEmployeeComponent]
})
export class AppModule { }
