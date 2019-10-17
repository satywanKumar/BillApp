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


  ngOnInit() {
  }
  newStudent:any = {
    name:'',
    branch:'',
    reggNo:'',
    batch:'',
    email:'',
    phone:'',
    parentsName:'',
    relation:'',
    parentsPhone:'',
    dob:'',
    skill:'',
    hobby:'',
    uid:'',
    tenthBoard:'',
    tenthSchool:'',
    tenthMarksObtained:'',
    tenthTotalMarks:'',
    twelthBoard:'',
    twelthSchool:'',
    twelthMarksObtained:'',
    twelthTotalMarks:'',
    btech1st:'',
    btech2nd:'',
    btech3rd:'',
    btech4th:'',
    btech5th:'',
    btech6th:'',
    btech7th:'',
    btech8th:'',
    extraCourse:'',
    achievement:'',
    tempAdd:'',
    tempPin:'',
    perAdd:'',
    perPin:'',
  }

  addStudent()
  {
    console.log(this.newStudent);
    this.studentService.addStudent(this.newStudent)
    .then(res=>{
      console.log(res);
      this.router.navigate(['/dashboard/student'])
    })
    .catch(err=>{
      console.log(err);
      this.dialog.open(NoticeComponent, {
        width: '350px',
        data:{alertMsg:err}
      });

    })
  }

}
