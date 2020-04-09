import { CanActivate, Router, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'shared/services/auth.service';
import  {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../../core/components/login/login.component';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate , CanDeactivate<LoginComponent>{

  

  constructor(private authServiceObj:AuthService,private router:Router) { 

  }
  canActivate(route,state:RouterStateSnapshot) 
  {
    return this.authServiceObj.user.pipe(map(user=>{
   if(user) return true;
   this.router.navigate(["/login"],{queryParams:{returnUrl: state.url}}); 
   return false;
   }
   ));
  }

  canDeactivate(component:LoginComponent){
  return this.authServiceObj.user.pipe(map(user=> {if(user) return false;}));
  }
}

/* References
import { filter, map } from 'rxjs/operators';

const nums = of(1, 2, 3, 4, 5);

// Create a function that accepts an Observable.
const squareOddVals = pipe(
  filter((n: number) => n % 2 !== 0),
  map(n => n * n)
);

// Create an Observable that will run the filter and map functions
const squareOdd = squareOddVals(nums);

// Subscribe to run the combined functions
squareOdd.subscribe(x => console.log(x));
*/