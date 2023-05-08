import { Component } from '@angular/core';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-manager-approvedleavehistory',
  templateUrl: './manager-approvedleavehistory.component.html',
  styleUrls: ['./manager-approvedleavehistory.component.scss']
})
export class ManagerApprovedleavehistoryComponent {
  leaveRequests;

  constructor(private Nav:NavbarService,private service:ServicesService){

  }
  ngOnInit(){
    return this.service.LeaveHistoryManagers().subscribe(res=>{
      this.leaveRequests=res
    })
  }
}
