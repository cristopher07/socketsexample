class Sockets {

  constructor(io) {
    this.io = io;

    this.socketEvents();

  }

  socketEvents() {
    //conexión del socket

    //on conection
    this.io.on("connection", (socket) => {
      //enviar mensaje al cliente
      // socket.emit('mensaje-bienvenida', {
      //     msg: 'Bienvenido al servidor',
      //     fecha: new Date(),
      // });

      //escuchar el mensaje del cliente
      socket.on('mensaje-to-server', (data) => {
        console.log(data);

        //enviar mensaje al cliente
        // socket.emit('mensaje-from-server', data);

       // enviar mensaje a todos los clientes
        this.io.emit("mensaje-from-server", data);
      });
    });
  }
}

module.exports = Sockets;
