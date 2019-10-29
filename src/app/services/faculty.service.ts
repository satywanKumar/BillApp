import { Injectable } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {AngularFireDatabase,AngularFireList, AngularFireObject} from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private firebase:AngularFireDatabase,
    private router:Router) { }
    
    facultyList:AngularFireList<any>;
    faculty:AngularFireObject<any>;

    form = new FormGroup({
      $key: new FormControl(null),
      name: new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      email: new FormControl('',Validators.email),
      dob:new FormControl('',Validators.required),
      degree:new FormControl('',Validators.required),
      subject:new FormControl('',Validators.required),
      exp:new FormControl('',Validators.required),
      skill:new FormControl('',Validators.required),
      award:new FormControl(''),
      achievement:new FormControl(''),
      additional:new FormControl('',Validators.required),
      tAdd:new FormControl('',Validators.required),
      pAdd:new FormControl('',Validators.required)
    });
  
    getFaculty()
    {
      this.facultyList = this.firebase.list('facultyData');
      return this.facultyList.snapshotChanges();
    }
    insertFaculty(faculty)
    {
      this.facultyList.push({
        name:faculty.name,
        gender:faculty.gender,
        phone:faculty.phone,
        email:faculty.email,
        dob:faculty.dob,
        degree:faculty.degree,
        subject:faculty.subject,
        exp:faculty.exp,
        skill:faculty.skill,
        award:faculty.award,
        achievement:faculty.achievement,
        additional:faculty.additional,
        tAdd:faculty.tAdd,
        pAdd:faculty.pAdd

      })
    }
    populateForm(faculty)
    {
      this.router.navigate(['/dashboard/faculty']);
      this.form.setValue(faculty);
    }
    updateFaculty(faculty)
    {
      this.facultyList.update(faculty.$key,{
        name:faculty.name,
        gender:faculty.gender,
        phone:faculty.phone,
        email:faculty.email,
        dob:faculty.dob,
        degree:faculty.degree,
        subject:faculty.subject,
        exp:faculty.exp,
        skill:faculty.skill,
        award:faculty.award,
        achievement:faculty.achievement,
        additional:faculty.additional,
        tAdd:faculty.tAdd,
        pAdd:faculty.pAdd

      });
    }

    getFacultyById($key:string)
    {
      this.faculty = this.firebase.object('/facultyData/'+$key);
      return this.faculty.snapshotChanges();
    }
    
    deleteFaculty(id)
    {
      this.facultyList.remove(id);
    }
}
