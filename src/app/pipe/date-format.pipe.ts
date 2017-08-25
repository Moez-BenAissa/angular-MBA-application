import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';


@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  if (value == '' || value==undefined)
    return '';

  var dateValue = new Date();
  var currentDate = new Date(dateValue.getUTCFullYear(),
    dateValue.getUTCMonth(),
    dateValue.getUTCDate(),
    dateValue.getUTCHours(),
    dateValue.getUTCMinutes(),
    dateValue.getUTCSeconds());
  return currentDate;

  }

}
