import { Component } from '@angular/core';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
constructor(private service:ServicesService,public nav:NavbarService)
{
}
attendanceLists;
ngOnInit(){
  this.nav.show();

this.getAttendanceDetails();
}

getAttendanceDetails(){
  return this.service.getAllAttendance().subscribe(res=>{
    this.attendanceLists=res.data;
  })
}
}
