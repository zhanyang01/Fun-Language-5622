import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASS,
  },
});

const sendEmail = async (emailType, content) => {
  const { user, token, recipient } = content;
  const { _id, name } = user;
  var emailSubject = "";
  var emailText = "";
  if (emailType == "verification") {
    emailSubject = "Account Verification";
    var linkToClick = `${process.env.REACT_APP_FRONTEND_SERVER}/verify/${_id}/${token}`;
    var emailText = `Hello ${name},\n\nPlease click on the following link to verify your account:\n\n${linkToClick}\n\nIf you did not request this, please ignore this email.\n\nRegards,\n\nThe Fun Language Team`;
  } else if (emailType == "forgetPassword") {
    emailSubject = "Password Reset";
    var linkToClick = `${process.env.REACT_APP_FRONTEND_SERVER}/resetpassword/${_id}/${token}`;
    var emailText = `Hello ${name},\n\nPlease click on the following link to reset your password:\n\n${linkToClick}\n\nIf you did not request this, please ignore this email.\n\nRegards,\n\nThe Fun Language Team`;
  }

  await transporter.sendMail({
    from: process.env.APP_EMAIL,
    to: recipient,
    subject: emailSubject,
    html: emailText,
  });
};

export default sendEmail;
