import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url="https://localhost:7085/"
  constructor(private http: HttpClient) { }
  private empId: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  getEmployeeById(empId: Employee) {
    debugger
        this.empId.next(empId);
  }
  getMethod() {
    debugger
    
      return this.empId.asObservable();

    
  }
  getCompany(){
    return this.http.get(this.url+"api/Employee/GetCompanyList")
  }
  getEmployeeByID(empId):Observable<any>{
    debugger
      return this.http.get<any>(this.url+"api/Employee/getEmployeeById/"+empId);
  }
  employeeList(){
    return this.http.get(this.url+"api/Employee/getEmployees");
  }

  addEmployee(emp:Employee){
    return this.http.post(this.url+"api/Employee/employeeSave",emp);
  }

  getDepartment(){
    return this.http.get(this.url+"api/Department/getDepartment");
  }

  getEmpType(){
    return this.http.get(this.url+"api/EmployeeType/GetEmployeeTypes")
  }
  getDesignation(){
    return this.http.get(this.url+"api/Designation/getDesignation")
  }
  getEmployeeRole(){
    return this.http.get(this.url+"api/EmployeeRoles/getEmployeeRoles")
  }
  updateEmployee(id,emp){
    return this.http.put(this.url+"api/Employee/updateEmployee/"+id,emp)
  }
  DeleteEmployee(empId){
    return this.http.delete(this.url+"api/Employee/emloyeeDelete/"+empId)
  }
}
