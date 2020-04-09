import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'shared/services/user.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppUser } from './shared/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user:Observable<firebase.User>

  constructor(private authObj : AngularFireAuth , private route:ActivatedRoute ,private userObj:UserService) 
   {
     this.user=authObj.authState;
   }

   login()
   {
     let returnUrl=this.route.snapshot.queryParams['returnUrl'] || "/";
     localStorage.setItem('returnUrl',returnUrl);
     //signInwithRedirect helps to redirect to auth with google facebook
     this.authObj.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider);
   }

   logOut()
   {
    this.authObj.auth.signOut(); 
  }
   
  getAppUser$()
  {
   return this.user
     .pipe(
      switchMap( user =>  {
                           if(user)
                           return this.userObj.get(user.uid).valueChanges();
                           return this.setObservableNull();
                           }
               )
          ) 
  }  

      setObservableNull():Observable<any>
      {
        return of(null);
      }

}
