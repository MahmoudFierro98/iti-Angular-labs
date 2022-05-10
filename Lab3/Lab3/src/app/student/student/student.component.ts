import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [
    new Student(1, "Mahmoud", 24, 1),
    new Student(2, "Mohamed", 24, 2),
    new Student(3, "Kamal", 24, 3)];

  newStudent: Student = new Student(0, "", 0, 0);
  viewStudent: Student = new Student(0, "hidden0000", 0, 0);
  student: Student = new Student(0, "hidden0000", 0, 0);

  addNewStudent() {
    this.students.push(new Student(this.newStudent.id, this.newStudent.name, this.newStudent.age, this.newStudent.deptno));
    this.newStudent.id = 0;
    this.newStudent.name = "";
    this.newStudent.age = 0;
    this.newStudent.deptno = 0;
  }

  showStudent(studentId: number) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == studentId) {
        this.viewStudent = this.students[i];
        break;
      }
    }
  }

  editStudent(studentId: number) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == studentId) {
        this.student = this.students[i];
        break;
      }
    }
  }

  deleteStudent(studentId: number) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == studentId) {
        this.students.splice(i,1);
        break;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
