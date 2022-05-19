import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentEditComponent } from './department-edit/department-edit.component';

const routes: Routes = [
  {
    path: "", component: DepartmentListComponent,
    // children: [
    //   { path: "details/:id", component: DepartmentDetailsComponent }
    // ]
  },
  { path: "add", component: DepartmentAddComponent },
  { path: "details/:id", component: DepartmentDetailsComponent },
  { path: "edit/:id", component: DepartmentEditComponent },
];

@NgModule({
  declarations: [
    DepartmentAddComponent,
    DepartmentListComponent,
    DepartmentDetailsComponent,
    DepartmentEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DepartmentAddComponent,
    DepartmentListComponent,
    DepartmentDetailsComponent
  ]
})
export class DepartmentModule { }
