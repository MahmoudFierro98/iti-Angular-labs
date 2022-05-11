import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css'],
  // providers: [DepartmentService]
})
export class DepartmentAddComponent implements OnInit {

  newDepartment = new Department(0, "", "");

  saveDepartment() {
    this.departmentService.addDepartment(this.newDepartment);
  }

  constructor(public departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

}
