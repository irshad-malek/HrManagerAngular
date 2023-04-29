import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ServicesService } from '../Services/services.service';

@Directive({
  selector: '[appEmployeeEmailExist]',
  providers: [
    {
      provide:  NG_ASYNC_VALIDATORS,
      useExisting: EmployeeEmailExistDirective,
      multi: true,
    }]
})
export class EmployeeEmailExistDirective implements AsyncValidator{

  constructor(private service:ServicesService) { 

  }
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this.service.employeeEmailExist(control.value).pipe(
      map(users=>{
        
        return users ? { Emails: { value: control.value } } : null;
    })
    );
  }
}
