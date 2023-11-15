import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editHomework'
})
export class EditHomeworkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
