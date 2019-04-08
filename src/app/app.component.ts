import { Component } from '@angular/core';
import { ServerHttp } from './httpServer'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array = [1, 2, 34];
  constructor(private ServerHttp: ServerHttp,
    private router:Router  ,
    private activatedroute:ActivatedRoute  ) { }
    total:""
    onAddNumber=(event)=>{
      this.total=event
    }
  // getData = () => {
  //   this.ServerHttp.get()
  //     .subscribe(response => {
  //       console.log(response.json());
  //     });
  // }
  // onAddNumber = (data) => {
  //   this.array.push(data);
  // }
  // onClickNavigateRoute=()=>{
  //   this.router.navigate(['user/2/ramu'])
  // }
}
