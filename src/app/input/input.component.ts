import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
@Output() addNumber= new EventEmitter<any>()

 @ViewChild('number') numberMacha;
   enterNumber ="";
  constructor() { }
  ngOnInit() {
  }
  onClickOk=()=>{    
    // console.log(this.numberMacha);
    
     this.enterNumber=this.numberMacha.nativeElement.value
    this.addNumber.emit(this.enterNumber)
  }
  // onChange=(event)=>{
  //   this.enterNumber=event.target.value
  // }
  // onClickAddNumber = (event) => {
  //   // console.log(event.value)
  //   console.log(this.numberMacha)
  // }
  // // onChangeEnterNumber = (event) => {
  // //   this.enterNumber = event.target.value;
  // // }
  // // onClick = () => {
  // //   this.addNumber.emit(this.enterNumber);
  // // }

}
