import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 userId:"";
 userName:""
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
     console.log(this.router);
     this.router.params.subscribe((params)=>{
      this.userId= params.id;
      this.userName= params.name
     })
    // this.userId = this.router.snapshot.params.id
    // this.userName = this.router.snapshot.params.name
    // console.log(this.userId);
    
  }
}
