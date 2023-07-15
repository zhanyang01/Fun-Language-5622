/*
Blueprint for sending email to user
*/

import nodemailer from "nodemailer";

const sendEmail = async(filename, filepath, email) => {
    let testAccount = nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: "587",
      secure: false,
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
      from: '"Fun Language" <funlanguage@example.com>',
      to: email,
      subject: "Certificate of Achievement",
      html: "<p>We are pleased to inform that you have received the following certificate for passing your assessment! We look forward to your future accomplishments.</p>",
      attachments: {
        filename: filename,
        path: filepath
      }
    }
  
    transporter.sendMail(mail, function(err, info) {
      if (err) {
        console.log(err);
        alert(err);
      } else {
        console.log(info);
        // alert("An email has been sent to you")
      }
    })
  }

  export default sendEmail;