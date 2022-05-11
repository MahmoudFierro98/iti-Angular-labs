import { Component } from '@angular/core';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [DepartmentService]
})
export class AppComponent {
  title = 'Lab4';
}
