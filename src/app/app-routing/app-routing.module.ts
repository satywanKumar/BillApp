import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { StudentListComponent } from '../student/student-list/student-list.component';
import { AddStudentComponent } from '../student/add-student/add-student.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { StudentDetailComponent } from '../student/student-detail/student-detail.component';
import { AddComponent } from '../faculty/add/add.component';
import { FacultyListComponent } from '../faculty/faculty-list/faculty-list.component';
import { FacultyDetailComponent } from '../faculty/faculty-detail/faculty-detail.component';

const routes:Routes = [
  {path:'dashboard',component:MainNavComponent,children:[
    {path:'student',component:StudentListComponent},
    {path:'add-student',component:AddStudentComponent},
    {path:'student-detail/:id',component:StudentDetailComponent},
    {path:'faculty',component:AddComponent},
    {path:'facultyList',component:FacultyListComponent},
    {path:'faculty-detail/:id',component:FacultyDetailComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'',component:HomeComponent},
  


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
