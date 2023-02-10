import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DatastoringserviceService {
  storealldata:any[]=[];
  emitter: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
