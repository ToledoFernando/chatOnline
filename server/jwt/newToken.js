require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (data) => {
  try {
    const {
      id,
      first_name,
      last_name,
      username,
      email } = data;
    const token = jwt.sign({ first_name, last_name, username, email }, process.env.SECRET_KEY, { expiresIn: '3h' })
    return token;
  } catch (error) {
    return error.message
  }
}