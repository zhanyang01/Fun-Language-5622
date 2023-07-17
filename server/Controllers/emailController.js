/*
Blueprint for sending email to user
*/

import nodemailer from "nodemailer";
// import asyncHandler from "express-async-handler";

const sendEmail = async(filename, filepath, email) => {
  // let testAccount = nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    // name: 'gmail',
    service: 'gmail',
    host: "smtp.gmail.com",
    port: "587",
    secure: false,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASS
    } /*,
    tls: {
      rejectUnauthorized: false
    }
    */
  });

  /*
  var filename = "";
  var filepath = "";
  const { email, testTitle } = req.body;

  // need to account for which assessment to attach the correct pdf
  if (testTitle === "Basic Assessment") {
    filename = 'English Language Basic Assessment.pdf';
    filepath = './English Certificates/English Language Basic Assessment.pdf';
  }
  if (testTitle === "Intermediate Assessment") {
    filename = 'English Language Intermediate Assessment.pdf';
    filepath = './English Certificates/English Language Intermediate Assessment.pdf';
  }
  if (testTitle === "Advanced Assessment") {
    filename = 'English Language Advanced Assessment.pdf';
    filepath = './English Certificates/English Language Advanced Assessment.pdf';
  }
  */
  
  let mail = {
    from: 'Fun Language <' + process.env.APP_EMAIL + '>',
    to: email,
    subject: "Certificate of Achievement",
    html: `<p>We are pleased to inform that you have received the following certificate for passing your assessment! We look forward to your future accomplishments.</p>`,
    attachments: {
      filename: filename,
      path: filepath
    }
  }
    
  try {
    let info = await transporter.sendMail(mail).then(() => {
      console.log("Message sent: %s", info.messageId)
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    })
  } catch(e) {
    console.log(e);
  }
};

export default sendEmail;