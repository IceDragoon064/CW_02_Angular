import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({ name: 'phonePipe'})

export class PhonePipe implements PipeTransform {
  transform(phoneNumber:string) {

  const areaCode = phoneNumber.slice(0,3);
  const midCode = phoneNumber.slice(3, 6);
  const lastCode = phoneNumber.slice(6, 10);

  return `(${areaCode})${midCode}-${lastCode}`
  }
}
