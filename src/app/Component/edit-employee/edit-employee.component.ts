import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/Models/employee';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {
  emp = new Employee();
  
  deptdropdownList;
  empTypeList;
  designationList;
  employeeRoleList;
  companyList;
  id;
  constructor(private _NgbActiveModal: NgbActiveModal, private service: ServicesService){

  }
  ngOnInit(): void {
    debugger

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
      this.service.getMethod().subscribe(res => {        
        this.id = res
        })
        
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
    })
  }
  onSubmit(form):void{
    if (form.invalid) {
      return
    }else{
      this.updateEmp();
    }
  }
  updateEmp() {
    this.service.updateEmployee(this.id, this.emp)
      .subscribe(() => {
        alert("update successfully");
        this.activeModal.close(true)
      })
  }
  get activeModal() {
    return this._NgbActiveModal;
  }
}
