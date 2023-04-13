import { Component } from '@angular/core';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-assignee-role-list',
  templateUrl: './assignee-role-list.component.html',
  styleUrls: ['./assignee-role-list.component.scss']
})
export class AssigneeRoleListComponent {
  AssigneeLists;

  constructor(private service:ServicesService,public nav:NavbarService){

  }
ngOnInit(){
  this.nav.show();
  this.service.getAssignee().subscribe(res=>{
    this.AssigneeLists=res;
  })
}
}
