import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConvert',
  pure: false
})
export class StringConvertPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('-').join(' ');;
  }

}
