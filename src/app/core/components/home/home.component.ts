import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showNavigationArrows:boolean;
  showNavigationIndicators:boolean;
  images=[1,2,3].map((n)=>'assets/img/'+n+'.jpg');
  constructor() { 

    this.showNavigationArrows=true;
    this.showNavigationIndicators=true;
  }


}
