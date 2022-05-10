import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySplice',
  pure: false
})
export class ArraySplicePipe implements PipeTransform {

  transform(value: unknown[], filter: string): unknown {
    let result = value.filter(element => element === filter);
    console.log(result);
    if (!result.length) {
      return "Not Found";
    }
    return result;
  }

}
