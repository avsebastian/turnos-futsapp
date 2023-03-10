import nodemailer from "nodemailer";
import config from "../config.js";

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.dev-futsapp.srtesthost.tk",
  port: 587,
  secure: false, // true for 465, false for other ports,
  auth: {
    user: config.EMAIL_USERNAME, // generated ethereal user
    pass: config.EMAIL_PASSWORD, // generated ethereal password
  },
});

export async function sendMail(userEmail, userName) {
  let info = await transporter.sendMail({
    from: '"Admin devFutsApp" <admin@dev-futsapp.srtesthost.tk>', // sender address
    to: userEmail, // list of receivers
    subject: "Reserva ✔", // Subject line
    text: "Cancha Reservada", // plain text body
    html: `<b>Hola ${userName}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}