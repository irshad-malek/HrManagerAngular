import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { NavbarService } from 'src/app/Services/navbar.service';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public nav:NavbarService,public service:ServicesService) {
    
   }

  ngOnInit(): void {
    
  }
}
