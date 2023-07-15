/*
Blueprint for sending email to user
*/

import nodemailer from "nodemailer";

const sendEmail = async(subject, message, send_to, sent_from) => {
    let testAccount = nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: "587",
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  
    // need to account for which assessment to attach the correct pdf
    const mail = {
      from: sent_from,
      to: send_to,
      subject: subject,
      html: message,
      attachments: {
        filename: "",
        path: ""
      }
    }
  
    transporter.sendMail(mail, function(err, info) {
      if (err) {
        console.log(err);
        alert(err);
      } else {
        console.log(info);
        alert("An email has been sent to you")
      }
    })
  }

  export default sendEmail;