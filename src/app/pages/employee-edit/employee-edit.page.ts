import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.page.html',
  styleUrls: ['./employee-edit.page.scss'],
})
export class EmployeeEditPage implements OnInit {
  id: any;
  details: any;
  editForm: FormGroup;

  flagLoaded = false;
  constructor(private activeRoute: ActivatedRoute, private employeeService: EmployeeService,
    private fb: FormBuilder, private router: Router, private toastController: ToastController) {
    this.initForms();
   }

  ngOnInit() {
    this.activeRoute.params.subscribe((param) => {
      this.id = param.id
    });
  }

  ionViewWillEnter(){
    this.getDetails();
  }

  goBack(){
    this.router.navigate(['/detail', this.id]);
  }

  initForms(){
    const alphaRegex = /^[a-zA-Z\s]*$/;
    this.editForm = this.fb.group({
      first_name: new FormControl('', Validators.compose([Validators.required, Validators.pattern(alphaRegex)])),
      last_name: new FormControl('', Validators.compose([Validators.required, Validators.pattern(alphaRegex)])),
    });
  }

  getDetails(){
    this.employeeService.getEmployeeById(this.id).then((res: any) => {
      this.flagLoaded = true;
      this.details = res.data;
      console.log(this.details);
    })
  }

  submitForm(){
    if(this.editForm.valid){
      let body = this.editForm.value;
      this.employeeService.editEmployee(this.id, body).then((res: any) => {
        console.log(res);
        this.editToast();
        this.router.navigate(['/detail', this.id]);
      })
    }
  }

  async editToast() {
    const toast = await this.toastController.create({
      message: 'Employee profile saved succesfully',
      duration: 2000
    });
    toast.present();
  }

}
