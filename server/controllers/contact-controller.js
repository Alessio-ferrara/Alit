const HttpError = require("../http-error");
const nodemailer = require("nodemailer");

const sendEmail = async (req, res, next) => {
  const { name, email, subject, message } = req.params;
  try {
  //   const auth = {
  //     auth: {
  //       api_key: "495a404e11d21220d1d1d2286744bf92-27a562f9-004fcdc5",
  //       domain: "sandbox139b35b612d84fa7be9374826ab69419.mailgun.org",
  //     },
  //   };

    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
           ciphers:'SSLv3'
        },
        auth: {
            user: 'duatiranen.alit@outlook.com',
            pass: 'DuaTiranen'
        }
    });

    const mailOptions = {
      from: email,
      to: "duatiranen.alit@outlook.com",
      subject: subject,
      text: message,
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
    
        console.log('Message sent: ' + info.originalMessage);
    });

   
  } catch (err) {
    return next(new HttpError(err, 500));
  }
};

exports.sendEmail = sendEmail;
