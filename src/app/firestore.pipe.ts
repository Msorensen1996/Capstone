import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firestore'
})
export class FirestorePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
