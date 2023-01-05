require("dotenv").config();
const { Sequelize } = require("sequelize");
const user = require("../models/users");
const { HOST_DB, NAME_DB, USER_DB, PASS_DB, PORT_DB } = process.env;

const conn = new Sequelize({
  database: NAME_DB,
  username: USER_DB,
  password: PASS_DB,
  host: HOST_DB,
  port: PORT_DB,
  dialect: "postgres",
  dialectOptions: {
    // ssl: {
    //   require: true,
    //   rejectUnauthorized: false,
    // },
  },
  logging: false,
});

user(conn);

module.exports = { ...conn.models, conn };
