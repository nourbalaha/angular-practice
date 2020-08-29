import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created!';
  serverName = "Server 1";
  serverCreated = false;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = false;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
     this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
     this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
