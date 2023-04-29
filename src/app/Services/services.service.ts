import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import { BehaviorSubject, Observable, map, single, tap } from 'rxjs';
import { leaveApply } from '../Models/leaveApply';
import { employeeSalary } from '../Models/employeeSalary';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { login } from '../Models/login';
import { manager } from '../Models/manager';
import { Attendance } from '../Models/Attendance';
import { CreatePassword } from '../Models/createPassword';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url="https://localhost:7085/"
  constructor(private http: HttpClient) { }
  salaryDetails=new employeeSalary();
  private empId: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private sId:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  getEmployeeById(empId: Employee) {
    
        this.empId.next(empId);
  }
  getEmpSalaryById(sId:employeeSalary){
    this.sId.next(sId);
  }
  getEmpSalaryMethod(){
    return this.sId.asObservable();
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
  getSalaryByEmpID(salaryDetails):Observable<any>{
    return this.http.get<any>(this.url+"api/salary/getEmpSalary/"+salaryDetails)
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
  getEmployeeRole():Observable<any>{
    return this.http.get<any>(this.url+"api/EmployeeRoles/getEmployeeRoles")
  }
  updateEmployee(id,emp){
    return this.http.put(this.url+"api/Employee/updateEmployee/"+id,emp)
  }
  DeleteEmployee(empId){
    return this.http.delete(this.url+"api/Employee/emloyeeDelete/"+empId)
  }
  getLeaveType():Observable<any>{
    return this.http.get<any>(this.url+"api/leaveApply/getLeaveType")
  }
  getSession():Observable<any>{
    return this.http.get<any>(this.url+"api/leaveApply/getSession");
  }
  getEmployee():Observable<any>{
    return this.http.get<any>(this.url+"api/leaveApply/GetEmployee");
  }
  getLeaveApproved():Observable<any>{
    return this.http.get<any>(this.url+"api/leaveApply/getManager/"+localStorage.getItem("emailId"));
  }
  leaveSubmit(leave:leaveApply,emailId){
    debugger
    return this.http.post(this.url+"api/leaveApply/leaveApplys/"+emailId,leave)
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
  getEmployeeSalary():Observable<any>{
    return this.http.get<any>(this.url+"api/Salary/salaryListOfEmp");
  }
  

  getEmpSalary(sId):Observable<any>{
    return this.http.get<any>(this.url+"api/Salary/getEmpSalary"+sId)
  }

  deleteEmpSalary(sId){
    return this.http.delete(this.url+"api/Salary/deleteEmpSalary/"+sId)
  }
  updateEmployeeSalary(sId,empSalary){
    return this.http.put(this.url+"api/Salary/updateEmployeeSalary/"+sId,empSalary)
  }
  login(logins:login): Observable<login> {
    return this.http
      .post<any>(`${this.url}api/Account/login`,logins)
      .pipe(
        tap((response) => {``
        console.log(response)
          localStorage.setItem('access_token', response.token);
        })
      );
  }
  logout() {
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }
  getAllAttendance(){
    return this.http.get<any>(this.url+"api/Attendance/getAllAttendanceDetails");
  }

  addEmployeeManager(manager:manager):Observable<manager>{
    return this.http.post<manager>(this.url+"api/Manager/saveManager",manager);
  }
  getManager():Observable<any>{
    return this.http.get<any>(this.url+"api/Manager/getAllManager");
  }
  getManagerById(id):Observable<any>{
    return this.http.get<any>(this.url+"api/Manager/getManagerById/"+id);
  }
 
  updateManager(id,manager:manager){
    return this.http.put(this.url+"api/Manager/updateManagers/"+id,manager)
  }

  addAttendance(attendance:Attendance){
    return this.http.post(this.url+"api/Attendance/saveAttendance",attendance)
  }
  createPassword(createPassword:CreatePassword){
    return this.http.post(this.url+"api/Account/createPassword",createPassword)
  }
  employeeEmailExist(emailId){
    return this.http.get(this.url+"api/Employee/EmployeeemailExist/"+emailId);
  }
}
