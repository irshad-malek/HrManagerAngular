import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-delete-emp-salary',
  templateUrl: './delete-emp-salary.component.html',
  styleUrls: ['./delete-emp-salary.component.scss']
})
export class DeleteEmpSalaryComponent {
  constructor(private _NgbActiveModal: NgbActiveModal,private service:ServicesService,private toastr: ToastrService){
}
sId;
ngOnInit(): void {
  this.service.getEmpSalaryMethod().subscribe(
    data => this.sId = data
  )
}
confirmDelete(sId){
  
  this.service.deleteEmpSalary(sId).subscribe(() => {
    this.toastr.success('', 'Record Deleted', {timeOut: 3000})
   this.activeModal.close(true)

  });
}
get activeModal() {
  return this._NgbActiveModal;
}
}
