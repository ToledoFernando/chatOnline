const express = require("express");
const { createServer } = require("http");
require("dotenv").config();
const { Server } = require("socket.io");

const port = process.env.PORT || 4000;

const app = express();

const serverHttp = createServer(app);

const io = new Server(serverHttp, {
  cors: {
    header: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`User is connected, ID is ${socket.id}`);
});

serverHttp.listen(port, () => console.log(`Server on Port ${port}`));
