const nodemailer = require("nodemailer");
const config = require("../config.js");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
      user: 'louvenia73@ethereal.email',
      pass: 'um8dp4NUP1JpdrrZNg'
  }
});

async function sendMail() {
  await transporter.sendMail({
    from: '"Admin FutsApp" <admin@srtesthost.tk>', // sender address
    to: "serggio.rs@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>Hello</b>`, // html body
  });

  console.log("Message sent: %s");
}
module.exports = {
    sendMail
}