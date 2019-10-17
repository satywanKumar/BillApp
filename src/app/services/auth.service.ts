import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router} from '@angular/router'
import { MatDialog } from '@angular/material';
import { NoticeComponent } from '../notice/notice.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,
              public router:Router,
              public dialog:MatDialog) {
    this.user = firebaseAuth.authState;
   }
  //  signup
  signUp(userName,password)
  {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(userName,password)
    .then(result=>{
      console.log(result);
      this.router.navigate(['/login'])
    })
    .catch(err=>{
      console.log(err)
    });
  }

  // login
  login(userName , password)
  {
    this.firebaseAuth.auth.signInWithEmailAndPassword(userName,password)
    .then(result=>{
      console.log(result.credential);
      this.dialog.open(NoticeComponent, {
        width: '350px',
        data:{alertMsg:'login successfully'}
      });
      this.router.navigate(['/dashboard'])
    })
    .catch(err=>{
      console.log(err);
      this.dialog.open(NoticeComponent, {
        width: '350px',
        data:{alertMsg:err}
      });
    });
  }

}
