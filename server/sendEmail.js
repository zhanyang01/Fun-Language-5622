/*
Blueprint for sending email to user
*/

import nodemailer from "nodemailer";

const sendEmail = async(filename, filepath, email) => {
    // let testAccount = nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      // name: 'gmail',
      host: 'gmail',
      // port: "587",
      // secure: false,
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASS
      } /*,
      tls: {
        rejectUnauthorized: false
      }
      */
    });
  
    // need to account for which assessment to attach the correct pdf
    let mail = {
      from: process.env.APP_EMAIL,
      to: email,
      subject: "Certificate of Achievement",
      html: "<p>We are pleased to inform that you have received the following certificate for passing your assessment! We look forward to your future accomplishments.</p>",
      attachments: {
        filename: filename,
        path: filepath
      }
    }
    
    try {
      let info = transporter.sendMail(mail);
      console.log("Message sent: %s", info.messageId)
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    } catch(e) {
      console.log(e);
    }
  }

  export default sendEmail;