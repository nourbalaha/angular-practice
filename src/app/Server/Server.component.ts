import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'Server',
    templateUrl: 'Server.component.html'
})

export class Server {
    serverId: number = 10;
    serverStatus: string = "offline";

    getServerStatus() {
        return this.serverStatus;
    }
}