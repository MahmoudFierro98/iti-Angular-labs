import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
departments:Department[]= [
    new Department(1, "OS", "Alex"),
    new Department(2, "WEB", "Alex"),
    new Department(3, "Mobile", "Alex")];

  newDepartment: Department = new Department(0, "", "");
  viewDepartment: Department = new Department(0, "hidden0000", "");
  department: Department = new Department(0, "hidden0000", "");

  addNewDepartment() {
    this.departments.push(new Department(this.newDepartment.id, this.newDepartment.deptname, this.newDepartment.location));
    this.newDepartment.id = 0;
    this.newDepartment.deptname = "";
    this.newDepartment.location = "";
  }

  showDepartment(departmentId: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == departmentId) {
        this.viewDepartment = this.departments[i];
        break;
      }
    }
  }

  editDepartment(departmentId: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == departmentId) {
        this.department = this.departments[i];
        break;
      }
    }
  }

  deleteDepartment(departmentId: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == departmentId) {
        this.departments.splice(i,1);
        break;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
