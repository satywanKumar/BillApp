import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NoticeComponent } from '../notice/notice.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService,
              public router:Router,
              public dialog:MatDialog) { }

  userName:string;
  password:string;

  ngOnInit() {
    
  }
  login()
  {
    if(this.userName === 'rec@ece' && this.password === 'ece@Sk')
    {
      this.router.navigate(['/dashboard']);
    }
    else{
      this.dialog.open(NoticeComponent,{
        data : {alertMsg:'invalid username or password'}
      })
    }
  }


}
