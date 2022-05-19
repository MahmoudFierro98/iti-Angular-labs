import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url: string = "http://localhost:8080/departments/";

  getAllDepartments() {
    return this.http.get<Department[]>(this.url)
  }

  getDepartment(departmentId: number) {
    return this.http.get<Department>(this.url + departmentId)
  }

  addDepartment(newDepartment: Department) {
    return this.http.post<Department>(this.url, newDepartment);
  }

  editDepartment(department: Department | null, departmentId: number) {
    
    return this.http.put<Department>(this.url + departmentId, department);
  }

  deleteDepartment(departmentId: number) {
    return this.http.delete<Department>(this.url + departmentId);
  }

  constructor(public http: HttpClient) { }
}
