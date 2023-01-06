require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    if (!req.headers.authorization) throw Error("Necesita un Token");
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
