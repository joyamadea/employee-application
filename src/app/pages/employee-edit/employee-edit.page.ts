import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.page.html',
  styleUrls: ['./employee-edit.page.scss'],
})
export class EmployeeEditPage implements OnInit {
  id: any;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((param) => {
      this.id = param.id
    });
  }

}
