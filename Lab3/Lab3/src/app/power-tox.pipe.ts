import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTox',
  pure: false
})
export class PowerToxPipe implements PipeTransform {

  transform(value: number, exponent: number): number {
    return Math.pow(value, exponent);
  }

}
