import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: Student | null = new Student(0, "", 0, 0);
  id = 0;

  constructor(public studentService: StudentService, public router: Router, public activatedRoute: ActivatedRoute) { }

  editStudent() {
    this.studentService.editStudent(this.student, this.id);
    this.router.navigateByUrl("/students");
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.student = this.studentService.getStudent(this.id);
  }

}
