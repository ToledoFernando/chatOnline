const { user } = require("../db/connection");
const newToken = require("../jwt/newToken");
const sendMail = require("./sendEmail");

const newUser = async (req, res) => {
  try {
    const { first_name, last_name, username, email, password } = req.body;
    if (
      !first_name.length ||
      !last_name.length ||
      !username.length ||
      !email.length ||
      !password.length
    ) {
      throw Error("Faltan Datos");
    }
    const newUser = await user.findOrCreate({
      where: { username: req.body.username },
      defaults: req.body,
    });
    newUser[0].password = "000000000000000000";
    if (!newUser[1]) throw Error("Username ya existe");
    const token = newToken(req.body);
    //sendMail({ newUser: newUser[0], token })
    res.json({ newUser: newUser[0], token });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.params;
    const User = await user.findOne({
      where: { email, password },
      attributes: { exclude: ["password"] },
    });
    if (!User) throw Error("Usuario no Existe");
    const token = newToken(req.body);
    res.json({ User, token });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const verifyAcoutn = async (req, res) => {
  try {
    const { username, email } = req.user;
    const updateUser = await user.update(
      { verify: true },
      { where: { username, email } }
    );
    if (updateUser[0] === 0)
      throw Error("No se pudo actualizar el estado el usuario");
    res.json({ msg: "Usuario Verificado con exito" });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = { newUser, userLogin, verifyAcoutn };
