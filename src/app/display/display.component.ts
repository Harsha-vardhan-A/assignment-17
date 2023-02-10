import { Component } from '@angular/core';
import { DatastoringserviceService } from '../datastoringservice.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  getdetails:any[]=[];
  message: any;
  activate:boolean=false
  text:string=''
  //subscribing the data
  constructor(public data:DatastoringserviceService){
    this.getdetails=data.storealldata
    this.data.emitter.subscribe((dataobj) =>{ 
      this.getdetails = dataobj;
    });
  }

  activateInput(event:any)
  {
   this.activate = event.isTrusted;
  }
  addData()
  {
    this.getdetails[0].additionaldataInfo=this.getdetails[0].additionaldataInfo+this.text;
    this.text='';
    this.activate=false
  }
  getInput(event:any)
  {
    console.log(event.target.value)
    this.text=event.target.value;
    
  }
}
