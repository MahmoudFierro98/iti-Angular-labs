import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthorizedGuard } from './authorized.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "contact-us", component: ContactusComponent, canActivate: [AuthorizedGuard] },
  { path: "about-us", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "departments", loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) },
  { path: "students", loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  // {
    //   path: "departments", component: DepartmentListComponent,
    //   children: [
      //     { path: "details/:id", component: DepartmentDetailsComponent }
      //   ]
      // },
      // { path: "departments/add", component: DepartmentAddComponent },
      // { path: "departments/details/:id", component: DepartmentDetailsComponent },
      { path: "**", component: NotfoundComponent }, // Wild Path
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
