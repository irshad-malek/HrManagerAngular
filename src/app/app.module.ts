import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DetailsEmployeeComponent } from './Component/details-employee/details-employee.component';
import { DeleteEmployeeComponent } from './Component/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './Component/edit-employee/edit-employee.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ AddEmployeeComponent,DetailsEmployeeComponent,DeleteEmployeeComponent]
})
export class AppModule { }
