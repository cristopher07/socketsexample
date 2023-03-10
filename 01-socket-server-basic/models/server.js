//servidor express
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;

    //Http server
    this.server = http.createServer(this.app);
    //configuración del socket server
    this.io = socketio(this.server, { /* configuraciones */ });
  }

  middlewares() {
    //desplegar el directorio público
    this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
  }

  configurarSockets(){
    new Sockets(this.io);
  }

  execute() {
    //inicializar middlewares
    this.middlewares();
    //inicializar sockets
    this.configurarSockets();
    //inicializar server
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto: ", this.port);
    });
  }
}

module.exports = Server;
