import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'Server',
    templateUrl: 'Server.component.html'
})

export class Server {
    serverId: number = 10;
    serverStatus: string = "offline";

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === "online" ? "green" : "red";
    }
}