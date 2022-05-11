import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departmentsList: Department[] = [];

  constructor(public departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentsList = this.departmentService.getAllDepartments();
  }

}
