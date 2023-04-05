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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    FooterComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ AddEmployeeComponent ]
})
export class AppModule { }
