import { Component } from '@angular/core';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent {
  managers;
  constructor(private service:ServicesService,private Nav:NavbarService)
  {

  }
  ngOnInit(){
    this.Nav.show();
    this.service.getManager().subscribe(res=>
      {
        this.managers=res.data;
      })
  }
}
