/*
Separate helper function specifically for sending certificate of achievement to user
*/

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASS,
  },
});

const sendCert = async (filename, filepath, email) => {
  await transporter.sendMail({
    from: process.env.APP_EMAIL,
    to: email,
    subject: "Certificate of Achievement",
    text: "We are pleased to present to you the certificate of achievement! We look forward to hearing about your future accomplishments :)",
    attachments: [
        {
            filename: filename,
            path: filepath
        }
    ]
  }).then(() => {
    console.log("success")
  });
};

export default sendCert;