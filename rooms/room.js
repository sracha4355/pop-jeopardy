import http from "http";
import {Room, Client} from "colyseus"

export class MyRoom extends Room {
    onAuth(token, request){}
    onCreate(options) {}
    onJoin(client, options, auth){}
    onLeave(client, consented) {}
    onDispose() {}
}
