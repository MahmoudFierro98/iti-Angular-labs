import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentModule } from './department/department.module';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DepartmentModule,
    StudentModule,
    FormsModule
  ],
  providers: [],
  // providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
