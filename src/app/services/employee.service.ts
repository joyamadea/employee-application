import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url: any;
  constructor(private http: HttpClient) {
    this.url = environment.link_url;
  }

  getAllEmployees(){
    let body = {
      pages: 1,
      row: 5
    }
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'users?page=2').subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getEmployeeById(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'users/'+id).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  deleteEmployee(id){
    return new Promise((resolve, reject) => {
      this.http.delete(this.url+'users/',id).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  editEmployee(id){
    let body = {
      first_name: 'Joy'
    }
    return new Promise((resolve, reject) => {
      this.http.put(this.url+'users/'+id, body).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  createEmployee(){
    let body = {
      first_name: 'Joy'
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'users/', body).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
