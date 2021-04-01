import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  employeeList: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(){
    
  }

  ionViewWillEnter(){
    this.fetchAllEmployees();
  }

  fetchAllEmployees(){
    this.employeeService.getAllEmployees().then((res: any) => {
      console.log(res);
      this.employeeList = res.data;
    })
  }
}
