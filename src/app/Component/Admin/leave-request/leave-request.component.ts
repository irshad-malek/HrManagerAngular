import { Component } from '@angular/core';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent {
  leaveRequests;
  constructor(private service:ServicesService,public nav:NavbarService){

  }
  ngOnInit(){
    this.nav.show();
    return this.service.getLeaveRequest().subscribe(res=>{
      this.leaveRequests=res;
      console.log(this.leaveRequests)
    })
  }
}
