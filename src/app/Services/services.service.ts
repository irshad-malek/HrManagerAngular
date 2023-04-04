import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url="https://localhost:7085/"
  constructor(private http: HttpClient) { }

  employeeList(){
    return this.http.get(this.url+"api/Employee/getEmployees");
  }
}
