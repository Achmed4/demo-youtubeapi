import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

    transform(value: string): string {
      if (value) {
        const time = value.replace('PT', '').replace('H', ':').replace('M', ':').replace('S', '');
        return time;
      } else {
        return '';
      }
    }

}
