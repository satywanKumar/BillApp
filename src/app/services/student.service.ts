// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {AngularFireDatabase,AngularFireList, AngularFireObject} from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firebase:AngularFireDatabase,
              public router:Router) { }

  studentList:AngularFireList<any>;
  student:AngularFireObject<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('',Validators.required),
    reggNo: new FormControl('',Validators.required),
    batch: new FormControl('',Validators.required),
    branch:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    dob:new FormControl(''),
    hobby:new FormControl(''),
    uid:new FormControl(''),
    pName:new FormControl(''),
    pPhone:new FormControl(''),
    relation:new FormControl(''),
    tAdd:new FormControl(''),
    tPin:new FormControl(''),
    pAdd:new FormControl(''),
    pPin:new FormControl(''),
    tenthBoard:new FormControl(''),
    tenthSchool:new FormControl(''),
    tenthTotalMarks:new FormControl(''),
    tenthObtainedMarks:new FormControl(''),
    twelthBoard:new FormControl(''),
    twelthSchool:new FormControl(''),
    twelthTotalMarks:new FormControl(''),
    twelthObtainedMarks:new FormControl(''),
    btech1st:new FormControl(''),
    btech2nd:new FormControl(''),
    btech3rd:new FormControl(''),
    btech4th:new FormControl(''),
    btech5th:new FormControl(''),
    btech6th:new FormControl(''),
    btech7th:new FormControl(''),
    btech8th:new FormControl(''),
    skill:new FormControl(''),
    extraCourse:new FormControl(''),
    achieve:new FormControl(''),
  });

  addStudent(student)
  {
    this.studentList.push({
      name:student.name,
      reggNo:student.reggNo,
      batch:student.batch,
      branch:student.branch,
      email:student.email,
      phone:student.phone,
      dob:student.dob,
      hobby:student.hobby,
      uid:student.uid,
      pName:student.pName,
      pPhone:student.pPhone,
      relation:student.relation,
      tAdd:student.tAdd,
      tPin:student.pPin,
      pAdd:student.pAdd,
      pPin:student.pPin,
      tenthBoard:student.tenthBoard,
      tenthSchool:student.tenthSchool,
      tenthTotalMarks:student.tenthTotalMarks,
      tenthObtainedMarks:student.tenthObtainedMarks,
      twelthBoard:student.twelthBoard,
      twelthSchool:student.twelthSchool,
      twelthTotalMarks:student.twelthTotalMarks,
      twelthObtainedMarks:student.twelthObtainedMarks,
      btech1st:student.btech1st,
      btech2nd:student.btech2nd,
      btech3rd:student.btech3rd,
      btech4th:student.btech4th,
      btech5th:student.btech5th,
      btech6th:student.btech6th,
      btech7th:student.btech7th,
      btech8th:student.btech8th,
      skill:student.skill,
      extraCourse:student.extraCourse,
      achieve:student.achieve
    })
  }

  populateForm(studentData)
    {
      this.router.navigate(['/dashboard/add-student']);
      this.form.setValue(studentData);
    }

  updateStudent(student)
  {
    this.studentList.update(student.$key,{
      name:student.name,
      reggNo:student.reggNo,
      batch:student.batch,
      branch:student.branch,
      email:student.email,
      phone:student.phone,
      dob:student.dob,
      hobby:student.hobby,
      uid:student.uid,
      pName:student.pName,
      pPhone:student.pPhone,
      relation:student.relation,
      tAdd:student.tAdd,
      tPin:student.pPin,
      pAdd:student.pAdd,
      pPin:student.pPin,
      tenthBoard:student.tenthBoard,
      tenthSchool:student.tenthSchool,
      tenthTotalMarks:student.tenthTotalMarks,
      tenthObtainedMarks:student.tenthObtainedMarks,
      twelthBoard:student.twelthBoard,
      twelthSchool:student.twelthSchool,
      twelthTotalMarks:student.twelthTotalMarks,
      twelthObtainedMarks:student.twelthObtainedMarks,
      btech1st:student.btech1st,
      btech2nd:student.btech2nd,
      btech3rd:student.btech3rd,
      btech4th:student.btech4th,
      btech5th:student.btech5th,
      btech6th:student.btech6th,
      btech7th:student.btech7th,
      btech8th:student.btech8th,
      skill:student.skill,
      extraCourse:student.extraCourse,
      achieve:student.achieve
    });
  }
  getAllStudent()
  {
    this.studentList = this.firebase.list('studentData');
      return this.studentList.snapshotChanges();
  }

  getStudent($key:string)
  {
    this.student = this.firebase.object('/studentData/'+$key);
    return this.student.snapshotChanges();
    


  }
  // getStudent(id)
  // {
  //   return this.db.collection('student').doc(id).valueChanges();
  // }

  deleteStudent($key:string)
  {
    this.studentList.remove($key);
  }
}
