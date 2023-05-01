import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-leave-approved-manager',
  templateUrl: './leave-approved-manager.component.html',
  styleUrls: ['./leave-approved-manager.component.scss']
})
export class LeaveApprovedManagerComponent {
  constructor(private nav:NavbarService,private service:ServicesService,private router:Router){

  }
  leaveRequests
  ngOnInit(){
    this.nav.show();
    return this.service.leaveApprovedByManager().subscribe(res=>{
      this.leaveRequests=res;
      console.log(this.leaveRequests)
    })
  }
  LeaveApproved(leaveId){
    return this.service.leaveApprovedSave(leaveId).subscribe(res=>{

      return this.service.leaveApprovedByManager().subscribe(res=>{
        this.leaveRequests=res;
      })
      this.router.navigate([''])
        })
  }
}
