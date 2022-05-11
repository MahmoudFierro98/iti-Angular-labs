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
      if (this.departments[i]._id === departmentId) {
        return this.departments[i];
      }
    }
    return null;
  }

  addDepartment(newDepartment: Department) {
    this.departments.push(new Department(newDepartment._id, newDepartment.name, newDepartment.location))
  }
  
  constructor() { }
}
