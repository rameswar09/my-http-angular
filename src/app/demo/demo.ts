import { Component } from '@angular/core';
@Component({
  selector: 'demo',
  templateUrl: './demo.html'
})
export class Demo {
  test = [1, 2, 3, 4, 5];
  selectValue = '';
  onChangevalue = (event) => {
    console.log('hello')
    console.log(event.target.value);
  }
}
