const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL, // generated ethereal user
    pass: process.env.CODEAPP, // generated ethereal password
  },
});

module.exports = async (data) => {
  const {
    first_name,
    last_name,
    username,
    email } = data.newUser;

  await transporter.sendMail({
    from: 'Chat Friend" <foo@example.com>',
    to: email || 'toledoferchu3@gmail.com',
    subject: "Confirmar Cuenta",
    text: "Hello world XDXDXDXDX",
    html: `Hola ${first_name} ${last_name} <a href='https://google.com' > Verificar Cuenta </a> </br> Token: ${data.token}`,
  });
}
