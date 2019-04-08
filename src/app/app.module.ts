import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {Server} from './server/server.component';
import {Demo} from './demo/demo';
import { Demo2Component } from './demo2/demo2.component';
import {ServerHttp} from './httpServer';
import { ServersComponent } from './servers/servers.component';
import { InputComponent } from './input/input.component';
import { UserComponent } from './user/user.component'
import {CommonModule} from '@angular/common';
 const appRoutes:Routes =[
   {path:"server",component:Server},
   {path:"demo1",component:Demo},
   {path:"demo2",component:Demo2Component},
   {path:"user/:id/:name", component:UserComponent}
 ]
@NgModule({
  declarations: [
    AppComponent,
    Server,
    Demo,
    Demo2Component,
    ServersComponent,
    InputComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    CommonModule
  ],
  providers: [ServerHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
