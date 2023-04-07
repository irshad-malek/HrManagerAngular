import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent {
  employee;
  constructor(private _NgbActiveModal: NgbActiveModal,private service:ServicesService){
    
  }
  ngOnInit(): void {
    this.service.getMethod().subscribe(
      data => this.employee = data
    )
  }
  confirmDelete(employee){
    debugger
    this.service.DeleteEmployee(employee).subscribe((response) => {
      
     this.activeModal.close(true)

    });
  }
  get activeModal() {
    return this._NgbActiveModal;
  }
}
