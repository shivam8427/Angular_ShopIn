import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNavActive]'
})
export class NavActiveDirective {

  
  constructor(private element : ElementRef) { }

@HostListener('focus') onFocus()
{
  
}



}
