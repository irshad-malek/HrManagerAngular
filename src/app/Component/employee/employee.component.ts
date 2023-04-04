import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:ServicesService) { }
  employees:any;
  ngOnInit(): void {
    this.employeeService.employeeList().subscribe(res => this.employees = res
      
    )
    console.log(this.employees)
  }

}
