const { Router } = require("express");
const {
  newUser,
  userLogin,
  verifyAcoutn,
  searchUser,
} = require("../../controllers/userControllers");
const validatToken = require("../../jwt/validateToke");

const route = Router();

route.post("/register", newUser);

route.get("/login/:email/:password", userLogin);

route.put("/verify", validatToken, verifyAcoutn);

route.get("/search/:username", validatToken, searchUser);

module.exports = route;
