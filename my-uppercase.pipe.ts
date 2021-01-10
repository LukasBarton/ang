import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: string, amount: number, replacement: string): string {
    let ntitle = '';
    if (value.length > amount) {
      ntitle = value.substr(0, amount - replacement.length) + replacement;
    } else {
      ntitle += value;
    }
    return ntitle;

  }
}
