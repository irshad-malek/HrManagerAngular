import { Component } from '@angular/core';
import { Attendance } from 'src/app/Models/Attendance';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-attendance-add',
  templateUrl: './attendance-add.component.html',
  styleUrls: ['./attendance-add.component.scss']
})
export class AttendanceAddComponent {
constructor(private Nav:NavbarService,private service:ServicesService,private datePipe:DatePipe,private router:Router,private toastr:ToastrService){

}
ngOnInit(){
  this.Nav.show();
  const isDisabled = localStorage.getItem('buttonDisabled');
  if (isDisabled) {
    this.disabled = JSON.parse(isDisabled);
  }
}
clicked = false;
disabled = false;

currentDateTime;
flag:boolean=false;
attendance=new Attendance();
SignIn(){
  debugger
  const now = new Date();
  this.flag=true;
  this.disabled = true;

  localStorage.setItem('buttonDisabled', JSON.stringify(this.disabled));

  this.currentDateTime = this.datePipe.transform(now, 'yyyy-MM-ddTHH:mm:ss');
  this.attendance.emailId=localStorage.getItem('emailId')
  this.attendance.InTime=this.currentDateTime
  this.attendance.Status="active"
  return this.service.addAttendance(this.attendance).subscribe(res=>{
    this.toastr.success('', 'Attendance Sign in successfully', {timeOut: 3000})
  })
}

SignOut(){
  const now = new Date();
  this.flag=false;
  this.currentDateTime = this.datePipe.transform(now, 'yyyy-MM-ddTHH:mm:ss');
  this.attendance.emailId=localStorage.getItem('emailId')
  this.attendance.OutTime=this.currentDateTime
  this.attendance.Status="disactive"
  return this.service.addAttendance(this.attendance).subscribe(res=>{
    this.router.navigate([''])
    this.toastr.success('', 'Logout successfully', {timeOut: 3000})

    localStorage.clear();
  })
}

}
