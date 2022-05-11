import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DepartmentAddComponent,
    DepartmentListComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DepartmentAddComponent,
    DepartmentListComponent,
    DepartmentDetailsComponent
  ]
})
export class DepartmentModule { }
