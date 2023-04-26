import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/Models/login';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(public nav: NavbarService,private authService: ServicesService,private router:Router){
  
}
logins=new login()
onSubmit(form) {
  debugger
  if (form.invalid) {
    return
  }else{
  localStorage.setItem('emailId',this.logins.EmailId)
  // const helper = new JwtHelperService();

  // const decodedToken = helper.decodeToken(localStorage.getItem('access_token'));
  //   console.log(decodedToken)
    this.authService.login(this.logins).subscribe(
      () => {
         this.router.navigate(['/manageEmployee']);
      }
    );
  }
 
}
}
