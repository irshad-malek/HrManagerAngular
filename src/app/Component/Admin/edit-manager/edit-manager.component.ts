import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { manager } from 'src/app/Models/manager';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';
import { NavbarComponent } from 'src/app/common/navbar/navbar.component';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.scss']
})
export class EditManagerComponent {
  id;
  manager=new manager();
  empRoles;
  employees;
  employeesMgrs;
  departments;
  constructor(private service:ServicesService,private route: ActivatedRoute,private Nav:NavbarService,private toastr:ToastrService,private router:Router){

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
    this.id = this.route.snapshot.params['manager.managerId'];
    this.detailsManager(this.id)
  }

  detailsManager(id:number){
    this.service.getManagerById(id).subscribe(res=>{
     this.manager.DeptId=res.deptId 
     this.manager.EffectiveFromDate=res.effectiveFromDate
     this.manager.EffectiveToDate=res.effectiveToDate
     this.manager.EmpIdMgr=res.empIdMgr
     this.manager.EmpId=res.empId
     this.manager.EmployeeRoleId=res.employeeRoleId
     this.manager.IsActive=true
     console.log(res)
    })
  }

  onSubmit(form){
    if (form.invalid) {
      return
    }else{
      this.updateManager();
    }
  }
  updateManager(){
    this.service.updateManager(this.id,this.manager).subscribe(res=>{
      this.toastr.success('', 'Record Updated', {timeOut: 3000})
      this.router.navigate(['/getAllManager'])
    })
  }
}
