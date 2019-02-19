import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

@Injectable()
export class ServerHttp{
  constructor(private http:Http){}
  get=()=>{
     return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
// import {Injectable} from '@angular/core'
// import {Http} from '@angular/http'
// @Injectable()
// export class ServerHttp{
//   constructor(private http:Http){}
// get(){
//   return this.http.get('https://jsonplaceholder.typicode.com/posts')
// }
// }
