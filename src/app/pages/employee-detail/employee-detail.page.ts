import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.page.html',
  styleUrls: ['./employee-detail.page.scss'],
})
export class EmployeeDetailPage implements OnInit {
  id: any;
  details: any;
  flagLoaded = false;

  constructor(private employeeService: EmployeeService, private activeRoute: ActivatedRoute, private router: Router,
    private popoverController: PopoverController) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((param) => {
      this.id = param.id
    });
  }

  ionViewWillEnter(){
    this.getDetails();
    // this.delete();
  }

  goBack() {
    this.router.navigate(['/home']);
  }
  getDetails(){
    this.employeeService.getEmployeeById(this.id).then((res: any) => {
      this.flagLoaded = true;
      this.details = res.data;
      console.log(this.details);
    })
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
        'id': this.id
      }
    });
    return await popover.present();
  }

  edit(){
    // this.employeeService.editEmployee(this.id).then((res: any) => {
    //   console.log(res);
    //   this.getDetails();
    // });
    // this.employeeService.createEmployee().then((res: any) => {
    //   console.log(res);
    // })
  }

  delete(){
    this.employeeService.deleteEmployee(this.id).then((res: any) => {
      console.log(res);
    })
  }

}
