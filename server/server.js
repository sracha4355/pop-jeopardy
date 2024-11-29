import express from "express";
import { createServer } from "http";
import { Server } from "colyseus";
import { MyRoom } from "../rooms/room.js";

const app = express();
app.use(express.json());

const gameServer = new Server({
  server: createServer(app),
  // transport: new uWebSocketsTransport(),
  // driver: new RedisDriver(),
  // presence: new RedisPresence(),
});

/**
 * Define your room handlers:
 */
gameServer.define("my_room", MyRoom);

gameServer.listen(2567);