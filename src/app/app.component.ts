import { Component } from '@angular/core';
import { ServerHttp } from './httpServer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array = [1, 2, 34];
  constructor(private ServerHttp: ServerHttp) { }
  getData = () => {
    this.ServerHttp.get()
      .subscribe(response => {
        console.log(response.json());
      });
  }
  onAddNumber = (data) => {
    this.array.push(data);
  }
}
// 9833860960
