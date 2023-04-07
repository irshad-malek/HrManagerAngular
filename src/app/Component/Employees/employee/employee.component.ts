import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';
import { NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Employee } from 'src/app/Models/employee';
import { DetailsEmployeeComponent } from '../details-employee/details-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

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
  }
  openModalDetails(id){
    this.employeeService.getEmployeeById(id);
    this.modalService.open(DetailsEmployeeComponent).result.then((confirm)=>{
      if(confirm==true)
      {
       this.employeeService.employeeList().subscribe(
         data => this.employees = data
       )}
     
     }).catch((res) => {});
  }
  openModal() {
    
    
    

    this.modalService.open(AddEmployeeComponent).result.then((confirm)=>{
       if(confirm==true)
       {
        this.employeeService.employeeList().subscribe(
          data => this.employees = data
        )}
      
      }).catch((res) => {});
    
  }

  openModalDelete(empId){
    this.employeeService.getEmployeeById(empId);
    this.modalService.open(DeleteEmployeeComponent).result.then((confirm)=>{
      if(confirm==true)
      {
       this.employeeService.employeeList().subscribe(
         data => this.employees = data
       )}
     
     }).catch((res) => {});
  }
  openModalEdit(empId){
    this.employeeService.getEmployeeById(empId);
    this.modalService.open(EditEmployeeComponent).result.then((confirm)=>{
      if(confirm==true)
      {
       this.employeeService.employeeList().subscribe(
         data => this.employees = data
       )}
     
     }).catch((res) => {});
  }
}
