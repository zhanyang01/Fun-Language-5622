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
    /*
    host: "smtp.gmail.com",
    port: "587",
    secure: false,
    */
    auth: {
      user: 'funlanguageapp@gmail.com',
      pass: 'kwdlsvrtlkunyaha'
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
    from: 'funlanguageapp@gmail.com',
    to: email,
    subject: "Certificate of Achievement",
    text: 'We are pleased to inform that you have received the following certificate for passing your assessment! We look forward to your future accomplishments.',
    attachments: {
      filename: filename,
      path: filepath
    }
  }
    
  transporter.sendMail(mail, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent" + info.response)
    }
  })
};

export default sendEmail;