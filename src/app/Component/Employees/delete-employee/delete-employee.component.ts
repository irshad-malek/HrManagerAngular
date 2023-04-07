import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/Services/services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent {
  employee;
  constructor(private _NgbActiveModal: NgbActiveModal,private service:ServicesService,private toastr: ToastrService){
    
  }
  ngOnInit(): void {
    this.service.getMethod().subscribe(
      data => this.employee = data
    )
  }
  confirmDelete(employee){
    
    this.service.DeleteEmployee(employee).subscribe((response) => {
      this.toastr.success('', 'Record Deleted', {timeOut: 3000})

     this.activeModal.close(true)

    });
  }
  get activeModal() {
    return this._NgbActiveModal;
  }
}
