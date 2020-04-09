import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth'
import { AuthService } from 'shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private authServiceObj : AuthService) {
  
   }
   logIn()
   {
     this.authServiceObj.login();
   }

    


  
}
