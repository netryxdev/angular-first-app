import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
    //template: `
    //<app-server></app-server>
    //<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  verify = false;
  userName: string = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {

  }

  onCreateServer() {
    this.serverCreationStatus = 'The server was created!';
    
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

  // Task 2 solved ✔

  /* verifyUsername() {
    if(this.userName == ''){
      
      return this.verify = true;
      
    } 
    else {
      console.log(this.userName)
      return this.verify = false;
      
    }
    
  }

  resetUserName() {
    this.userName = '';
    console.log(this.userName)
  } */
}
