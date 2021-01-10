import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: string, amount: number, replacement: string): string {
    let newTitle = '';
    if (value.length > amount) {
      newTitle = value.substr(0, amount - replacement.length) + replacement;
    } else {
      newTitle += value;
    }
    return newTitle;

  }
}
