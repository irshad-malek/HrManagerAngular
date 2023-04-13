import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { leaveApply } from 'src/app/Models/leaveApply';
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
  constructor(private service:ServicesService,private toastr:ToastrService){
    
  }
  ngOnInit(): void {
  this.service.getLeaveType().subscribe(res=>{
    this.leaveTypes=res
  })
  this.service.getSession().subscribe(res=>{
    this.sessions=res
  })
  this.service.getEmployee().subscribe(res=>{
    this.employees=res
  })
  this.service.getLeaveApproved().subscribe(res=>{
    this.leaveApproves=res
  })
  }

  LeaveSubmit(){
    this.service.leaveSubmit(this.leave).subscribe(res=>{
      this.toastr.success('', 'Record inserted', {timeOut: 3000})
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
