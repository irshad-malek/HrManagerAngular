import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../../Models/employee';
import { ServicesService } from 'src/app/Services/services.service';
import { NgForm } from '@angular/forms';
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  emp = new Employee();
  
  deptdropdownList;
  empTypeList;
  designationList;
  employeeRoleList;
  companyList;
  
  
  isAddMode: boolean;
  id: number;
  selected;
  constructor(private _NgbActiveModal: NgbActiveModal, private service: ServicesService) { }
  cities
  detailEmployee(id) {
    this.service.getEmployeeByID(id).subscribe(res => {
      this.emp.FirstName = res.firstName
      this.emp.LastName = res.lastName
      this.emp.Gender = res.gender
      this.emp.MobileNo = res.mobileNo
      this.emp.EmailId = res.emailId
      this.emp.Address = res.address
      //this.deptdropdownList=res.deptId
      this.emp.DeptId = res.deptId
      this.emp.EmpTypeId = res.empTypeId
      this.emp.EmployeeRoleId = res.employeeRoleId
      this.emp.DesgId = res.desgId
      this.emp.CId = res.cId
      // this.emp=res
    })
  }
  ngOnInit(): void {
    debugger

    this.isAddMode = !this.id;
      this.detailEmployee(this.id);
    this.service.getDepartment().subscribe(res => {
      this.deptdropdownList = res
    })
    this.service.getEmpType().subscribe(res => {
      this.empTypeList = res
    })
    this.service.getDesignation().subscribe(res => {
      this.designationList = res
    })
    this.service.getCompany().subscribe(res => {
      this.companyList = res
    })
    this.service.getEmployeeRole().subscribe(res => this.employeeRoleList = res)
    if (!this.isAddMode) {
      this.service.getMethod().subscribe(res => {        
        this.id = res
      })  
  }
  }
  ngOnChanges(){

  }
  get activeModal() {
    return this._NgbActiveModal;
  }

  
  onSubmit(form): void {
    debugger
   
    if (form.invalid) {
      return
    } else {
      if (this.isAddMode) {
        this.addEmployee();
      } else {
        this.updateEmp();
      }

    }
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  addEmployee() {
    debugger
    this.service.addEmployee(this.emp).subscribe((res) => {
      alert("record inserted")
      this.activeModal.close(true)
    })
  }
  updateEmp() {
    this.service.updateEmployee(this.id, this.emp)
      .subscribe(() => {
        alert("update successfully");
        this.activeModal.close(true)
      })
  }
  
}
