import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  newStudent = new Student(0, "", 0, 0);

  saveStudent() {
    this.studentService.addStudent(this.newStudent);
  }

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }

}
