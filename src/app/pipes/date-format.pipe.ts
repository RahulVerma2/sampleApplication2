import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let date = new Date(value);
    return `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }

}
