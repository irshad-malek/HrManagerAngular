import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';
import { NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:ServicesService,public modalService: NgbModal) { }
  employees:any;
  ngOnInit(): void {
    this.employeeService.employeeList().subscribe(
      data => this.employees = data
    )
    console.log(this.employees)
  }
  openModal() {
    this.modalService.open(AddEmployeeComponent);
    
  }
}
