import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }
  userName:string;
  password:string;
  confirmPassword:string

  signup()
  {
    this.authService.signUp(this.userName,this.password);
    
  }
}
