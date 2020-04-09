import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopIn';
  
  constructor(private authObj :AuthService , router:Router , private userObj:UserService)  {
 
    this.authObj.user.subscribe(user=>
   {
   if(!user) return;      
      this.userObj.save(user);
      let returnUrl=localStorage.getItem('returnUrl');
      
      if(!returnUrl) return ;
    
      localStorage.removeItem('returnUrl');
      router.navigate([returnUrl]);        
  } 
   )
  }
}
