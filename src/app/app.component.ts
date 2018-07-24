import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private MyserviceService: MyserviceService) { }

  typeList: any = [];
  ngOnInit() {
    // const socket = socketIo('http://localhost:8080');
    const socket = socketIo('http://ec2-18-191-246-179.us-east-2.compute.amazonaws.com:8080');
    socket.on('alexacall', (data) => {
      this.MyserviceService.getList(data).subscribe(response => {
        this.typeList = [];
        this.typeList = response;
      });
    }

    );

    this.MyserviceService.getList().subscribe(response => {
      this.typeList = response;
    });
  }

}