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
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'TestServer';
  verify: boolean = false;
  userName: string = '';
  serverCreated: boolean = false;
  servers = ['Testserver', 'Testserver2'];
  showDetails: boolean = false;
  logClickArray: number[] = [];
  lastNumbers: string = this.logClickArray.length.toString();
  logCounter: number = 0;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'The server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

  // Task 2 solved ✔

  verifyUsername() {
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
  }

  displayDetails() {
    this.showDetails = true; 
    this.logCounter = this.logCounter++
    this.logClickArray.push(this.logCounter++)
    console.log(this.logCounter)
  }

  changeColorLog() {
    return this.logCounter >= 5 ? 'lightskyblue' : null
  }
}
