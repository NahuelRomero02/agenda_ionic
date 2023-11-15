import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editHomwork'
})
export class EditHomworkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
