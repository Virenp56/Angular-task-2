import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // //P2C
  // @Input() myName: any

  // //C2P
  // public obj = {
  //   name: "viren",
  //   age: 22
  // }
  // @Output() myFunction: EventEmitter<any> = new EventEmitter();
  // sendData() {
  //   this.myFunction.emit(this.obj)
  // }






  // //onChanges
  // @Input() name!: string;
  // @Input() dob!: string;


  // public age!: number;//used in onChange
  // public msg!: string;//used in onChange
  // public newName!: string; //used in onChange

  // constructor() { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("onChange is running...");
  //   if (changes['dob']) {
  //     this.age = this.getAge(this.dob)
  //     if (this.age >= 10 && this.age < 14) {
  //       this.msg = "You are Kid"
  //     } else if (this.age >= 14 && this.age <= 18) {
  //       this.msg = "You are teen"
  //     } else {
  //       this.msg = "You are Mature"
  //     }
  //   }

  //   if (changes['name']) {
  //     this.newName = this.name.charAt(0).toUpperCase() + this.name.substr(1);
  //   }
  // }

  // // setter and getter
  // private _name!: string;
  // private _dob!: string;

  // @Input() get name(): string {
  //   return this._name
  // }
  // public set name(value: string) {
  //   this._name = value;
  //   if (value) {
  //     this.newName = this.name.charAt(0).toUpperCase() + this.name.substr(1);
  //   }
  // }

  // @Input() get dob(): string {
  //   return this._dob
  // }

  // public set dob(value: string) {
  //   this._dob = value;
  //   this.age = this.getAge(this._dob)
  //   if (this.age >= 10 && this.age < 14) {
  //     this.msg = "You are Kid"
  //   } else if (this.age >= 14 && this.age <= 18) {
  //     this.msg = "You are teen"
  //   } else {
  //     this.msg = "You are Mature"
  //   }
  // }

  // private getAge(dateofBirth: string) {
  //   let dob = new Date(dateofBirth).getTime();
  //   let currentDate = new Date().getTime();
  //   return Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24 * 365))
  // }


  // // Task-2
  private _name!: string;
  private _dob!: string;

  @Input() get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value;
  }
  @Input() get dob(): string {
    return this._dob
  }
  public set dob(value: string) {
    this._dob = value;
  }

  @Output() myFunction: EventEmitter<any> = new EventEmitter();
  sendData() {
    this.myFunction.emit({ name: this._name, dob: this._dob })
  }
}
