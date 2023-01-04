const { serverHttp, port } = require('./app');
const { conn } = require('./db/connection');
require("dotenv").config();
require('./socket/socket');

serverHttp.listen(port, async () => {
  await conn.sync({ force: true })
  console.log(`-------------------
DB is connected
Server on Port ${port}
-------------------`)
});
