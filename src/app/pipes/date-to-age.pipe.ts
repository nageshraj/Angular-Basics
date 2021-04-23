import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToAge'
})
export class DateToAgePipe implements PipeTransform {

  transform(value: any): any {

    let currentYear: any = new Date().getFullYear();
    let userDOB: any = new Date(value).getFullYear();
    let userAge = currentYear-userDOB;
    
    return userAge ;
  }

}
