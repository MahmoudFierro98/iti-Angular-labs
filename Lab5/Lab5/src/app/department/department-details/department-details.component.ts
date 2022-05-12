import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  id = 0;
  department: Department | null = new Department(0, "", "");

  constructor(public departmentService: DepartmentService, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.department = this.departmentService.getDepartment(this.activatedRoute.snapshot.params['id']);
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}
