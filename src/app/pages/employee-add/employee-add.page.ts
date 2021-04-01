import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.page.html',
  styleUrls: ['./employee-add.page.scss'],
})
export class EmployeeAddPage implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private toastController: ToastController,
    private router: Router) { 
    this.initForms();
  }

  ngOnInit() {
  }

  initForms(){
    const alphaRegex = /^[a-zA-Z\s]*$/;
    this.addForm = this.fb.group({
      first_name: new FormControl('', Validators.compose([Validators.required, Validators.pattern(alphaRegex)])),
      last_name: new FormControl('', Validators.compose([Validators.required, Validators.pattern(alphaRegex)])),
      job: new FormControl('', Validators.compose([Validators.required, Validators.pattern(alphaRegex)])),
    });
  }

  submitForm(){
    if(this.addForm.valid){
      let body = this.addForm.value;
      this.employeeService.createEmployee(body).then((res: any) => {
        console.log(res);
        this.addToast();
        this.router.navigate(['/home']);
      })
    }
    
  }

  async addToast() {
    const toast = await this.toastController.create({
      message: 'Employee profile saved succesfully',
      duration: 2000
    });
    toast.present();
  }

}
