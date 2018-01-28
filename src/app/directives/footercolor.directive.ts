import { Directive, ElementRef, Input } from '@angular/core';
import { ThemecolorsService } from '../services/themecolors.service';

@Directive({
  selector: '[appFootercolor]'
})
export class FootercolorDirective {
  @Input() fcolor1= '#a04000';

  constructor(element: ElementRef, private theme: ThemecolorsService) {
    this.fcolor1 = this.theme.emmit1.subscribe(res => {
      // console.log(res);
      element.nativeElement.style.backgroundColor = res;
    });
    // element.nativeElement.style.backgroundColor = '#393d40';
    element.nativeElement.style.color = 'white';
    element.nativeElement.style.textAlign = 'center';
    element.nativeElement.style.paddingBottom = '20px';
  }
  g1() {
    this.fcolor1 = this.theme.emmit1.subscribe(res => console.log(res));
  }
}
