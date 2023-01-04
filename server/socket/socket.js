const { serverHttp } = require('../app');
require("dotenv").config();
const { Server } = require('socket.io');

const io = new Server(serverHttp, {
  cors: {
    header: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`User is connected, ID is ${socket.id}`);
});


module.exports = io;