const { serverHttp } = require('../app');
require("dotenv").config();
const { Server } = require('socket.io');

const io = new Server(serverHttp, {
  cors: {
    header: "*",
  },
});

let usersOnline = [];

io.on("connection", (socket) => {
  socket.on('userConnected', (data) => {
    usersOnline.push({ socketID: socket.id, user: data })
  })

  socket.on('msgUser', (data) => console.log(data))

  socket.on('disconnect', () => {
    usersOnline = usersOnline.filter((usuario) => usuario.socketID !== socket.id)
  })
});

module.exports = io; 