const { Router } = require("express");
const {
  newUser,
  userLogin,
  verifyAcoutn,
} = require("../../controllers/userControllers");
const validatToken = require("../../jwt/validateToke");

const route = Router();

route.post("/register", newUser);

route.get("/login/:email/:password", userLogin);

route.put("/verify", validatToken, verifyAcoutn);

route.get("/searchY/:username", validatToken);

module.exports = route;
