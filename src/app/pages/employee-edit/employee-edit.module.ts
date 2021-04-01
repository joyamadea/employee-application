import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeEditPageRoutingModule } from './employee-edit-routing.module';

import { EmployeeEditPage } from './employee-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeEditPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [EmployeeEditPage]
})
export class EmployeeEditPageModule {}
