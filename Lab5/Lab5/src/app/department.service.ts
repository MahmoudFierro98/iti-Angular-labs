import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    new Department(100, "sd", "alex"),
    new Department(200, "os", "alex"),
    new Department(300, "sd", "mansoura"),
    new Department(400, "ai", "smart"),
    new Department(500, "ai", "alex"),
  ];

  getAllDepartments() {
    return this.departments;
  }

  getDepartment(departmentId: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i]._id == departmentId) {
        return this.departments[i];
      }
    }
    return null;
  }

  addDepartment(newDepartment: Department) {
    this.departments.push(new Department(newDepartment._id, newDepartment.name, newDepartment.location))
  }

  editDepartment(department: Department|null, departmentId: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i]._id == departmentId && department!=null) {
        this.departments[i]._id = department._id;
        this.departments[i].name = department.name;
        this.departments[i].location = department.location;
      }
    }  
  }

  deleteDepartment(departmentId: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i]._id == departmentId) {
        this.departments.splice(i, 1);
        break;
      }
    }  
  }
  
  constructor() { }
}
