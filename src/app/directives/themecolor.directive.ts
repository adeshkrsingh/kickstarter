import { Directive, ElementRef} from '@angular/core';


@Directive({
  selector: '[appThemecolor]'
})
export class ThemecolorDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'blue';
   }

}
