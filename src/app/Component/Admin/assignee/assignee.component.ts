import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { juniourAssign } from 'src/app/Models/juniourAssign';
import { seniourAssign } from 'src/app/Models/seniourAssign';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss']
})
export class AssigneeComponent {
  JuniourAssigns;
  SeniourAssigns;
  jform=new juniourAssign();
  sform=new seniourAssign();
  selectedLevel;
  selectedLevel1;
  flag:boolean=false;
  constructor(private service:ServicesService,private toastr:ToastrService, private router: Router,public nav:NavbarService){

  }
  ngOnInit(): void {
    this.nav.show();
  this.service.getJuniourAssign().subscribe(res=>{
    this.JuniourAssigns=res;
  })
  this.service.getSiniourAssign().subscribe(res=>{
    this.SeniourAssigns=res;
  })
  }

  onSubmit(form:NgForm):void{
      this.addAssignee();
  }
  addAssignee(){
    debugger
    
    this.service.addAssignee(this.selectedLevel,this.selectedLevel1).subscribe((res) => {
      this.toastr.success('', 'Record inserted', {timeOut: 3000})
      this.router.navigate(['AssigneeRoleList']);
    })
  }
  selected(){
    console.log(this.selectedLevel)
    console.log(this.selectedLevel1)
  }
}
