import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { leaveApply } from 'src/app/Models/leaveApply';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.scss']
})
export class LeaveApplyComponent {
  leave=new leaveApply();
  leaveTypes;
  sessions;
  employees;
  leaveApproves;
  constructor(private service:ServicesService,private toastr:ToastrService,public nav:NavbarService,private router:Router){
    
  }
  ngOnInit(): void {
    this.nav.show();
  this.service.getLeaveType().subscribe(res=>{
    this.leaveTypes=res.data
  })
  this.service.getSession().subscribe(res=>{
    this.sessions=res.data
  })
  this.service.getEmployee().subscribe(res=>{
    this.employees=res.data
  })
  this.service.getLeaveApproved().subscribe(res=>{
    this.leaveApproves=res.data
    console.log(this.leaveApproves)
  })
  }

  LeaveSubmit(){
   let emailId=localStorage.getItem("emailId")
    this.service.leaveSubmit(this.leave,emailId).subscribe(res=>{
      this.toastr.success('', 'Record inserted', {timeOut: 3000})
      this.router.navigate(['/leaveRequest'])
    })
  }
  onSubmit(form): void {
    

    if (form.invalid) {
      return
    } else {

      this.LeaveSubmit();


    }
  }
}
