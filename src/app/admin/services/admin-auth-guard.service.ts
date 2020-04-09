import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private authObj:AuthService,private userObj:UserService) {
   }

   canActivate() :Observable<boolean>
   {
     return this.authObj.getAppUser$().pipe( map(user=>              //switch map took type of observable and put it in next map
      {
        if(user.isAdmin)
        return true;

        console.log("you are not permitted yet")
    }))
        
     
   }
}
