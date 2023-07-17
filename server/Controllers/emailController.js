/*
Blueprint for sending email to user
*/

import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";

export const sendEmail = asyncHandler(async(req, res) => {
  // let testAccount = nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    // name: 'gmail',
    service: 'gmail',
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
  
  // need to account for which assessment to attach the correct pdf
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
    
  transporter.sendMail(mail, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      res.json({status: info.response});
    }
  })
});