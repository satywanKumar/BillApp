import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NoticeComponent } from 'src/app/notice/notice.component';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(public studentService:StudentService,
              public router:Router,
              public dialog : MatDialog) { }

      submitted:boolean = false;
      formControls = this.studentService.form.controls;
      showSuccessMessage:boolean;
      

  ngOnInit() {
    this.studentService.getAllStudent();
  }
  onSubmit()
  {
    this.submitted = true;
    if(this.studentService.form.valid)
    {
      if(this.studentService.form.get('$key').value == null)
      {
        console.log('new',this.studentService.form.value);
        this.studentService.addStudent(this.studentService.form.value);
      }  
      else
      {
        this.studentService.updateStudent(this.studentService.form.value);
        console.log('added successfully');
      }
       this.showSuccessMessage = true;
       setTimeout(()=> this.showSuccessMessage = false,3000);
      this.submitted = false;
      this.studentService.form.reset();
      this.router.navigate(['/dashboard/student']);
      
    }
  }
}
