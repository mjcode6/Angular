import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {



  info1: string[] = ['mj siva', 'E234','a@abc.com']
  info2: string[] = ['mj karan', 'E235','b@abc.com']
  info3: string[] = ['mj suyha', 'E236','C@abc.com']


  getInfo1():string[] {
      return this.info1
  }
  getInfo2():string[] {
    return this.info2
  }

  getInfo3():string[] {
    return this.info3
  }
  constructor() { }


  addInfo(info: any){
   this.info1.push(info);
   this.info2.push(info);
   this.info3.push(info);

   return this.info1
  }
  }

