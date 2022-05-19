import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  newStudent = new Student(0, "", 0, 0);

  showForm(template: any) {
    console.log(template);
  }
  saveStudent() {
    this.studentService.addStudent(this.newStudent);
    this.router.navigateByUrl("/students");
  }

  constructor(public studentService: StudentService, public router: Router) { }

  ngOnInit(): void {
  }

}
