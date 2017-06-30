import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let d = new Date(date);
    return moment(d).format('DD/MM/YYYY');
  }

}
