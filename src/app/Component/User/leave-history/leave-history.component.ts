import { Component } from '@angular/core';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss']
})
export class LeaveHistoryComponent {
  leaveRequests;

  constructor(private Nav:NavbarService,private service:ServicesService)
  {

  }
  ngOnInit(){
    this.Nav.show();
    return this.service.getleaveHistory().subscribe(res=>{
      this.leaveRequests=res;
      console.log(this.leaveRequests)
    })
  }
}
