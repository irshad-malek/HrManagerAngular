import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';
import { EmployeeSalaryComponent } from '../employee-salary/employee-salary.component';
import { DeleteEmpSalaryComponent } from '../delete-emp-salary/delete-emp-salary.component';
import { DetailsEmpSalaryComponent } from '../details-emp-salary/details-emp-salary.component';
import { UpdateEmpSalaryComponent } from '../update-emp-salary/update-emp-salary.component';

@Component({
  selector: 'app-employee-salary-list',
  templateUrl: './employee-salary-list.component.html',
  styleUrls: ['./employee-salary-list.component.scss']
})
export class EmployeeSalaryListComponent {
  employeeSalory;
  constructor(private service:ServicesService,public nav:NavbarService,public modalService: NgbModal){

  }
  ngOnInit():void{
    this.nav.show();
    
    this.empSalary();
  }
empSalary(){
  this.service.getEmployeeSalary().subscribe(res=>{
    this.employeeSalory=res.data
  })
}
  openModal(){
      this.modalService.open(EmployeeSalaryComponent).result.then((confirm)=>{
         if(confirm==true)
         {
          this.empSalary();

          }
        
        }).catch((res) => {}); 
  }

  openModalEmpSalaryDelete(sId){
    this.service.getEmpSalaryById(sId);
    this.modalService.open(DeleteEmpSalaryComponent).result.then((confirm)=>{
      if(confirm==true)
      {
       this.service.getEmployeeSalary().subscribe(
         res => this.employeeSalory = res.data
       )}
     }).catch((res) => {});
  }
  openModalEmpSalaryEdit(sId){
    this.service.getEmpSalaryById(sId);
    this.modalService.open(UpdateEmpSalaryComponent).result.then((confirm)=>{
      if(confirm==true)
      {
       this.service.getEmployeeSalary().subscribe(
        res => this.employeeSalory = res.data
       )}
     }).catch((res) => {});
  }
  openModalempSalaryDetails(sId){
    this.service.getEmpSalaryById(sId);
    this.modalService.open(DetailsEmpSalaryComponent).result.then((confirm)=>{
      if(confirm==true)
      {
       this.service.getEmployeeSalary().subscribe(
         res => this.employeeSalory = res.data
       )}
     }).catch((res) => {});
  }
}
