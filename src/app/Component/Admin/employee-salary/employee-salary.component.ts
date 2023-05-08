import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { employeeSalary } from 'src/app/Models/employeeSalary';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.scss']
})
export class EmployeeSalaryComponent {
empSalary=new employeeSalary();
Employees;
constructor(private service:ServicesService,public nav:NavbarService,private _NgbActiveModal: NgbActiveModal,private toastr:ToastrService){

}
ngOnInit(): void {
  this.nav.show();
   this.service.getEmployee().subscribe(res=>{
    this.Employees=res.data;
  })
}
onSubmit(form:NgForm){
  console.log(this.empSalary)
  this.service.addEmployeeSalary(this.empSalary).subscribe(res=>{
    this.toastr.success('', 'Record inserted', {timeOut: 3000})
    this.activeModal.close(true)

  })
}
get activeModal() {
  return this._NgbActiveModal;
}
}
