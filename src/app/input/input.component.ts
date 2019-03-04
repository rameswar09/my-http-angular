import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  // @Output() addNumber = new EventEmitter<any>();
  @ViewChild('number') numberMacha;
  enterNumber = '';
  constructor() { }
  ngOnInit() {
  }
  onClickAddNumber = (event) => {
    // console.log(event.value)
    console.log(this.numberMacha)
  }
  // onChangeEnterNumber = (event) => {
  //   this.enterNumber = event.target.value;
  // }
  // onClick = () => {
  //   this.addNumber.emit(this.enterNumber);
  // }

}
