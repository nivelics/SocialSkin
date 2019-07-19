import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatDate' })
export class FormatDate implements PipeTransform {

    public month = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    transform(date: string): string {
        let formatStringDate = '';
        let splitStringDate = date.split('-');
        let numberMonth = splitStringDate[1];
        formatStringDate = splitStringDate[2] + ' ' + this.month[Number(numberMonth) - 1];
        return formatStringDate;
    }
}
