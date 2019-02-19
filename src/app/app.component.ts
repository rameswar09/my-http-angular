import { Component } from '@angular/core';
import {ServerHttp} from './httpServer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ServerHttp:ServerHttp) {}
  getData = () => {
    this.ServerHttp.get()
    .subscribe(response => {
      console.log(response.json());
    });
  }
}
