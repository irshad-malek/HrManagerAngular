import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { manager } from 'src/app/Models/manager';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent {
  manager=new manager();
  empRoles;
  employees;
  employeesMgrs;
  departments;
  constructor(private service:ServicesService,private Nav:NavbarService,private toastr:ToastrService,private router:Router){
  }

  ngOnInit(){
    this.Nav.show();
    this.service.getEmployeeRole().subscribe(res=>{
      this.empRoles=res;
    })
    this.service.getEmployee().subscribe(res=>{
      this.employees=res.data
    })
    this.service.getDepartment().subscribe(res=>{
      this.departments=res;
    })
    this.service.getEmployee().subscribe(res=>{
      this.employeesMgrs=res.data
    })
    
  }
  onSubmit(form:NgForm){
    this.service.addEmployeeManager(this.manager).subscribe(res=>{
      this.toastr.success('', 'Record inserted', {timeOut: 3000})
      this.router.navigate(['getAllManager'])
    })
  }
}
