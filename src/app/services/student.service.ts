import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public db:AngularFirestore) { }
  addStudent(student)
  {
    return this.db.collection('student').add(student);
  }

  getAllStudent()
  {
    return this.db.collection('student').snapshotChanges();
  }

  getStudent(id)
  {
    return this.db.collection('student').doc(id).valueChanges();
  }

  deleteStudent(id)
  {
    return this.db.collection('student').doc(id).delete();
  }
}
