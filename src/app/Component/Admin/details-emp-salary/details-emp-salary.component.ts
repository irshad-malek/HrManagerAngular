import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { employeeSalary } from 'src/app/Models/employeeSalary';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-details-emp-salary',
  templateUrl: './details-emp-salary.component.html',
  styleUrls: ['./details-emp-salary.component.scss']
})
export class DetailsEmpSalaryComponent {
  sId;
  Employees;
  empSalary=new employeeSalary();
  constructor(private _NgbActiveModal: NgbActiveModal, private service: ServicesService,private toastr:ToastrService){
  
  
  }
  ngOnInit(){
    this.service.getEmployee().subscribe(res=>{
      this.Employees=res;
    })
    this.service.getEmpSalaryMethod().subscribe(
      data => this.sId = data
    )
    this.getSalaryEmpDetails(this.sId)
  }
  getSalaryEmpDetails(sId){
    return this.service.getSalaryByEmpID(sId).subscribe(res=>{
      this.empSalary.BasicsSalary=res.data.basicsSalary
      this.empSalary.EmpId=res.data.empId
      this.empSalary.GrossSalary=res.data.grossSalary
      this.empSalary.HouseRent=res.data.houseRent
      this.empSalary.Medical=res.data.medical
      this.empSalary.taxAmount=res.data.taxAmount
    })
  }
  get activeModal() {
    return this._NgbActiveModal;
  }
}
