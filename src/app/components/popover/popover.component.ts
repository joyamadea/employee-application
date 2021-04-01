import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController, ToastController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  @Input() id;
  constructor(private popoverController: PopoverController, private alertController: AlertController,
    private toastController: ToastController, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  dismissPopover(){
    this.popoverController.dismiss();
  }

  edit(){
    this.dismissPopover();
    this.router.navigate(['/edit', this.id]);
  }

  async deleteAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are you sure you want to delete this employee?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.delete();
          }
        }
      ]
    });
    this.dismissPopover();
    await alert.present();
  }

  delete(){
    this.employeeService.deleteEmployee(this.id).then((res: any) => {
      this.deleteToast();
      this.router.navigate(['/home']);
    })
  }

  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Employee deleted',
      duration: 2000
    });
    toast.present();
  }
}
