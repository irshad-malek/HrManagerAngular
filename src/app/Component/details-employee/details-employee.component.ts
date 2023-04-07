import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/Models/employee';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.scss']
})
export class DetailsEmployeeComponent {
  emp = new Employee();
  id;
  deptdropdownList;
  empTypeList;
  designationList;
  employeeRoleList;
  companyList;
  
  constructor(private service:ServicesService,private _NgbActiveModal: NgbActiveModal){

  }
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
      console.log(res)
    })
  }
  ngOnInit(): void {
    this.service.getMethod().subscribe(res => {        
      this.id = res
    }) 
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
    this.detailEmployee(this.id);

  }
  get activeModal() {
    return this._NgbActiveModal;
  }
}
