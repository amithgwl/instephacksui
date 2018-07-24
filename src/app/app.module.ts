import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyserviceService} from './myservice.service'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
