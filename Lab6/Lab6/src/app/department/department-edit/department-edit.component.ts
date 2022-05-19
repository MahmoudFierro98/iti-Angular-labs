import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  department: Department | null = new Department(0, "", "");
  id = 0;

  constructor(public departmentService: DepartmentService, public router: Router, public activatedRoute: ActivatedRoute) { }

  editDepartment() {
    this.departmentService.editDepartment(this.department, this.id).subscribe(data => {
      this.department = data;
      this.router.navigateByUrl("/departments");
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe(data => {
      this.departmentService.getDepartment(data['id']).subscribe(dept => {
        this.department = dept;
      });
    });
  }

}
