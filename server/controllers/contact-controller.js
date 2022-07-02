import validator from "validator";
const HttpError = require("../http-error");
const nodemailer = require("nodemailer");

const sendEmail = async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const errors = [];
  // const re = new RegExp('[0-9]+[.,]?[0-9]*')

  if (!name || !validator.isAlpha(name)) {

    errors.push({
      name: "name",
      message:
        "The name contains invalid characters! Please enter only letters!",
    });
  }
  if (!email || !validator.isEmail(email)) {
  
    errors.push({ name: "email", message: "Your email is invalid!" });
  }
  if (!subject || !validator.isAscii(subject)) {
 
    errors.push({
      name: "subject",
      message: "Your subject contains invalid characters!",
    });
  }
  if (!message || !validator.isAscii(message)) {

    errors.push({
      name: "message",
      message: "Your message contains invalid characters!",
    });
  }

  if (errors.length) {
    return res.status(400).send({ errors: errors });
  }

  try {
    var transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: "duatiranen.alit@outlook.com",
        pass: "DuaTiranen",
      },
    });

    const mailOptions = {
      from: name + "<duatiranen.alit@outlook.com>",
      to: "duatiranen.alit@outlook.com",
      subject: subject + " from <" + email + ">",
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: " + info.originalMessage);
    });

    res.send({
      message: "Success",
    });
  } catch (err) {
    return next(new HttpError(err, 500));
  }
};

exports.sendEmail = sendEmail;
