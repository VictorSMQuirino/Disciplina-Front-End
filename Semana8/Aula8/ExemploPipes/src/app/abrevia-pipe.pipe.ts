import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abreviaPipe'
})
export class AbreviaPipePipe implements PipeTransform {

  transform(valor: string): string {
    return valor
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('.');
  }

}
