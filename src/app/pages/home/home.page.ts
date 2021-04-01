import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  employeeList: any;

  constructor(private employeeService: EmployeeService, private router: Router) {}

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

  gotoDetail(id){
    this.router.navigate(['/detail',id]);
  }

  gotoAdd(){
    this.router.navigate(['/add']);
  }
}
