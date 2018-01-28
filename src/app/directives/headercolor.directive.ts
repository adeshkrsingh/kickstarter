import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeadercolor]'
})
export class HeadercolorDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = '#393d40';
    element.nativeElement.style.color = '#393d40';
  }

}
