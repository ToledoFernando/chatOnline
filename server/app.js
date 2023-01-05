const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes/routes"));

const serverHttp = createServer(app);

module.exports = { serverHttp, port };
