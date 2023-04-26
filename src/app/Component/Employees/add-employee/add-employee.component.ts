import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../../../Models/employee';
import { ServicesService } from 'src/app/Services/services.service';
import { NgForm } from '@angular/forms';
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';

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


  id: number;
  constructor(private _NgbActiveModal: NgbActiveModal, private service: ServicesService,private toastr:ToastrService) { }

  ngOnInit(): void {
    

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

  get activeModal() {
    return this._NgbActiveModal;
  }


  onSubmit(form): void {
    

    if (form.invalid) {
      return
    } else {
      this.addEmployee();
    }
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  addEmployee() {
    
    this.service.addEmployee(this.emp).subscribe((res) => {
      this.toastr.success('', 'Record inserted', {timeOut: 3000})
            this.activeModal.close(true)
    })
  }

}
