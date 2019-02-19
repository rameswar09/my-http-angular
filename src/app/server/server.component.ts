import {Component} from '@angular/core'

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html'
})
export class Server{
  name:string= "ramu"
  show=false;
  names: string[] = ["ramu","hari","raju"] 
  onClick=()=>{
    this.show=!this.show
  }
  onUpdate=(event)=>{
    this.name= event.target.value
  }
}
// import {Component} from '@angular/core';
// @Component({
//   selector:'app-server',
//   templateUrl:'./server.component.html'
// })
// export class Server {
//   isallow=false
//   show:string="hello world"
// name:string="ramu";
// demo=()=>{
//   return "china"
// }
// onClick=()=>{
//   this.show="zero world"
// }
// onUpdata=(event:any)=>{
//   this.show=event.target.value
// }
//
// }
