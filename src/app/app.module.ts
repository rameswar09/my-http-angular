import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {Server} from './server/server.component';
import {Demo} from './demo/demo';
import { Demo2Component } from './demo2/demo2.component';
import {ServerHttp} from './httpServer';
import { ServersComponent } from './servers/servers.component';
import { InputComponent } from './input/input.component'
 const appRoutes:Routes =[
   // {path:"",component:AppComponent},
   {path:"server",component:Server},
   {path:"demo1",component:Demo},
   {path:"demo2",component:Demo2Component}
 ]
@NgModule({
  declarations: [
    AppComponent,
    Server,
    Demo,
    Demo2Component,
    ServersComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ServerHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
