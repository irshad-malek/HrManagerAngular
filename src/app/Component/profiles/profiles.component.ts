import { Component } from '@angular/core';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  employees;
constructor(private Nav:NavbarService,private service:ServicesService){

}
ngOnInit(){
  this.Nav.show();
  this.service.getSpecificEmployee(localStorage.getItem('emailId')).subscribe(res=>{
    this.employees=res;
    console.log(res)
  })
}
}
