import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import { BehaviorSubject, Observable } from 'rxjs';
import { leaveApply } from '../Models/leaveApply';
import { employeeSalary } from '../Models/employeeSalary';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url="https://localhost:7085/"
  constructor(private http: HttpClient) { }
  private empId: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  getEmployeeById(empId: Employee) {
    
        this.empId.next(empId);
  }
  getMethod() {  
      return this.empId.asObservable();   
  }
  getCompany(){
    return this.http.get(this.url+"api/Employee/GetCompanyList")
  }
  getEmployeeByID(empId):Observable<any>{   
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
  getLeaveType(){
    return this.http.get(this.url+"api/leaveApply/getLeaveType")
  }
  getSession(){
    return this.http.get(this.url+"api/leaveApply/getSession");
  }
  getEmployee(){
    return this.http.get(this.url+"api/leaveApply/GetEmployee");
  }
  getLeaveApproved(){
    return this.http.get(this.url+"api/leaveApply/getLeaveApproved");
  }
  leaveSubmit(leave:leaveApply){
    return this.http.post(this.url+"api/leaveApply/leaveApplys",leave)
  }
  getJuniourAssign(){
    return this.http.get(this.url+"api/Assignee/juniourAssign");
  }
  getSiniourAssign(){
    return this.http.get(this.url+"api/Assignee/seniourAssign");
  }
  addAssignee(eId,EmpId){
    let headers = new HttpHeaders();
    headers  = headers.append('responseType', 'json');
    return this.http.post(this.url+"api/Assignee/addAssignee/"+eId+"/"+EmpId,headers)
  }
  getAssignee(){
    return this.http.get(this.url+"api/Assignee/AssignList");
  }
  addEmployeeSalary(empSalary:employeeSalary):Observable<employeeSalary>{
    return this.http.post<employeeSalary>(this.url+"api/Salary/AddSalaryDetails",empSalary)
  }
  getLeaveRequest(){
    return this.http.get(this.url+"api/ApprovedLeave/getLeaveRequest");
  }
}
