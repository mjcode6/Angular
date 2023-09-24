import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers:[RecordsService]
})
export class EmpInfoComponent {

infoRecived1:string[] = [];
infoRecived2:string[] = [];
infoRecived3:string[] = [];

getInfoFromServicesClass1(){
  this.infoRecived1 = this.rservices.getinfo1();
}

getInfoFromServicesClass2(){
  this.infoRecived2 = this.rservices.getinfo3();
}
getInfoFromServicesClass3(){
  this.infoRecived3 = this.rservices.getinfo3();
}

constructor(private rservices: RecordsService){

}
}
