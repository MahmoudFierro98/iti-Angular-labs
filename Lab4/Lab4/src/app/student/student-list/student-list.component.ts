import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentsList: Student[] = [];

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.studentsList = this.studentService.getAllStudents();
  }

}
