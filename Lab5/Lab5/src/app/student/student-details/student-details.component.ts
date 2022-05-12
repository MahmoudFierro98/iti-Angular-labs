import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id = 0;
  student: Student | null = new Student(0, "", 0, 0);

  constructor(public studentService: StudentService, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.student = this.studentService.getStudent(this.activatedRoute.snapshot.params['id']);
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}
