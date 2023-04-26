import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { employeeSalary } from 'src/app/Models/employeeSalary';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-update-emp-salary',
  templateUrl: './update-emp-salary.component.html',
  styleUrls: ['./update-emp-salary.component.scss']
})
export class UpdateEmpSalaryComponent {
  empSalary=new employeeSalary();
  sId;
  Employees;
  constructor(private _NgbActiveModal: NgbActiveModal, private service: ServicesService,private toastr:ToastrService){
  
  
  }
  ngOnInit(){
    this.service.getEmployee().subscribe(res=>{
      this.Employees=res.data;
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
      // console.log(res.data.basicsSalary)
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
    this.service.updateEmployeeSalary(this.sId, this.empSalary)
      .subscribe(() => {
        this.toastr.success('', 'Record Updated', {timeOut: 3000})
        this.activeModal.close(true)
      })
  }
  get activeModal() {
    return this._NgbActiveModal;
  }
}
