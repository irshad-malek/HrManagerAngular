import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-specificempsalary',
  templateUrl: './specificempsalary.component.html',
  styleUrls: ['./specificempsalary.component.scss']
})
export class SpecificempsalaryComponent {
  employeeSalary;
  dtTrigger: Subject<any> = new Subject<any>();

constructor(private nav:NavbarService,private service:ServicesService){

}
dtOptions: any = {};

ngOnInit(){
   this.service.getSpecificEmployeeSalary().subscribe(res=>{
    this.employeeSalary=res;
    console.log(res)
  })
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 3,
    processing: true,
    dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'print'
      ]
  };
}
}
