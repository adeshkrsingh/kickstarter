import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  transform(value: any, s1: any, args?: any): any {
    let str = value;
    let res = str.replace(s1 , "<b>" + s1 + "</b>" );
    return res;
  }

}
