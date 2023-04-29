import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreatePassword } from 'src/app/Models/createPassword';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent {
 createPass=new CreatePassword();
  constructor(private nav:NavbarService,private service:ServicesService,private toastr:ToastrService,private router:Router){

  }
  ngOnInit(){
  }

  onSubmit(form){

    if(form.invalid){

    }
    else{
      this.createPassword();
    }
  }
  createPassword(){
    return this.service.createPassword(this.createPass).subscribe(res=>{
      this.toastr.success('', 'Record inserted', {timeOut: 3000})
      this.router.navigate(['']) 
    }
   )
  }
}
