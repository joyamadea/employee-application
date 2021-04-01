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
    this.employeeService.getAllEmployees1().then((res: any) => {
      this.employeeList = res.data;
    })
    this.employeeService.getAllEmployees2().then((res: any) =>{
      let tempList = res.data;
      tempList.forEach(element => {
        this.employeeList.push(element);
      });
      // this.employeeList.push(res.data);
      console.log(this.employeeList);
    })
  }

  gotoDetail(id){
    this.router.navigate(['/detail',id]);
  }

  gotoAdd(){
    this.router.navigate(['/add']);
  }

  filterList(evt){
    const searchTerm = evt.srcElement.value;
    console.log(searchTerm);

    if (!searchTerm) {
      this.fetchAllEmployees();
      return;
    }

    this.employeeList = this.employeeList.filter(currentFood => {
      if ((currentFood.first_name || currentFood.last_name) && searchTerm ) {
        return (currentFood.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
}
