import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers: [DataService]
})
export class EInfoComponent {


  infoRecived1: string[] = [];
  infoRecived2: string[] = [];
  infoRecived3: string[] = [];


getInfoFromRecived1(){
this.infoRecived1 = this.dservice.getInfo1();
}

getInfoFromRecived2(){
  this.infoRecived2 = this.dservice.getInfo2();
}

getInfoFromRecived3(){
  this.infoRecived3 = this.dservice.getInfo3();
}

constructor(private dservice: DataService){
  
}

updateInfo(frm: any){
  this.dservice.addInfo(frm.value.location);
}


}
