// import { Component } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatastoringserviceService } from '../datastoringservice.service'
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {
  childdata: string = ""  //storing child data
  title = 'forms';

  constructor(private emitdata: DatastoringserviceService, private route: ActivatedRoute, private router: Router) {

  }
  // ngOnInit(): void {
  // adding validations
  registration = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(250),
      Validators.pattern("^[a-zA-Z]+")
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.maxLength(256),
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z ]+")
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.max(999),
      Validators.min(1),
      // Validators.pattern("^[0-9]+")
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(256),
      Validators.minLength(3),
      Validators.pattern("^[a-zA-Z]+[a-zA-Z0-9.-_@$]+")
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(256),
      Validators.minLength(10),
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]),
    phonenumber: new FormControl('', [
      Validators.required,
      Validators.max(9999999999),
      Validators.min(1000000000),
      Validators.pattern("^[0-9]+")
    ]),
    additionaldata: new FormControl('', [
      // Validators.required,

      Validators.pattern("^[a-zA-Z][a-zA-Z0-9@#$%^&*(){}]+$")
    ])
  });
  // }


  // getting all form details

  get firstname() {
    // console.log(this.registrationform.get('firstname'))
    return this.registration.get('firstname');
  }
  get lastname() {
    return this.registration.get('lastname');
  }
  get age() {
    return this.registration.get('age');
  }
  get username() {
    return this.registration.get('username');
  }
  get email() {
    return this.registration.get('email');
  }
  get phonenumber() {
    return this.registration.get('phonenumber');
  }
  get additionaldata() {
    return this.registration.get('additionaldata');
  }
  onData(event: string) {
    // console.log(this.registration);
    this.childdata = event;

  }
  // adding to the data
  onSubmit() {
    let returnObj :object = {
      firstname: this.registration.controls['firstname'].value, lastname: this.registration.controls['lastname'].value,
      age: this.registration.controls['age'].value, username: this.registration.controls['username'].value, email: this.registration.controls['email'].value,
      phonenumber: this.registration.controls['phonenumber'].value, additionaldata: this.registration.controls['additionaldata'].value, additionaldataInfo: this.childdata
    }

    if (this.registration.valid) {
      // this.emitdata.emitter.emit(returnObj);
      this.emitdata.storealldata.push(returnObj);
      this.router.navigate(['display'], { relativeTo: this.route });
    }
  }
  activate:boolean=false
  text:string=''
  activateInput(event:any)
  {
   this.activate = event.isTrusted;
  }
  addData()
  {
    // this.getdetails[0].additionaldataInfo=this.getdetails[0].additionaldataInfo+this.text;
    this.text='';
    // this.activate=false
  }
  getInput(event:any)
  {
    // console.log(event.target.value)
    this.text=event.target.value;
    
  }
}
