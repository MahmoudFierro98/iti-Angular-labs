import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentComponent } from './department/department/department.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { StudentModule } from './student/student.module';
import { DepartmentModule } from './department/department.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule, 
    CoreModule,
    FormsModule,
    StudentModule,
    DepartmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
