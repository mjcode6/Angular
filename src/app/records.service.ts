import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1:string[] = ['mj siva','E234','m@abc.net']
  info2:string[] = ['mj karan','E235','s@abc.net']
  info3:string[] = ['mj tharan','E236','d@abc.net']


 getinfo1(): string[]{
   return this.info1
 }
 getinfo2(): string[]{
  return this.info2
}
getinfo3(): string[]{
  return this.info3
}

  constructor() { }
}
