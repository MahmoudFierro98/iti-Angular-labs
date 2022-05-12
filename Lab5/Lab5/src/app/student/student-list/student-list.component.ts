import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentsList: Student[] = [];

  constructor(public studentService: StudentService, public router: Router) { }

  showAdd() {
    this.router.navigate(['/students', 'add']);
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId);
  }

  ngOnInit(): void {
    this.studentsList = this.studentService.getAllStudents();
  }

}
