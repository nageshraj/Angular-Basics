import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateToAge'
})
export class DateToAgePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): String {

    let today = moment();
                let birthdate = moment(value);
                let years = today.diff(birthdate, 'years');
                let html:string = years + " yr ";

                html += today.subtract(years, 'years').diff(birthdate, 'months') + " mo";


    return html;
  }

}
