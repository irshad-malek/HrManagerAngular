import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/Models/login';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(public nav: NavbarService,private service:ServicesService,private authService: ServicesService,private router:Router,private toastr:ToastrService){
  this.nav.hide();
}
showErrorMessage:boolean=false
logins=new login()
onSubmit(form) {
  debugger
  if (form.invalid) {
    return
  }else{
    localStorage.setItem('emailId',this.logins.EmailId)
   
    this.service.getEmployeeType().subscribe((response: boolean)=>{
      if(response){
        this.service.isLoggedIns=true;
      }
      else{
        this.service.isLoggedIns=false;
      }
    })
  // const helper = new JwtHelperService();

  // const decodedToken = helper.decodeToken(localStorage.getItem('access_token'));
  //   console.log(decodedToken)
    this.authService.login(this.logins).subscribe(
      () => {
        this.toastr.success('', 'Login successfully', {timeOut: 3000})
        this.router.navigate(['/AttendanceSign']);
      },
      (error) => {
        this.showErrorMessage = true;
    }
    );
  }
 
}
}
