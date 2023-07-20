import asyncHandler from "express-async-handler";
import sendCert from "../HelperFunctions/sendCert.js";

export const cert = asyncHandler(async(req, res) => {
  var filename = "";
  var filepath = "";
  const { email, testTitle } = req.body;
  // console.log(req.body);

  // need to account for which assessment to attach the correct pdf
  if (testTitle === "Basic Assessment") {
    filename = "English Language Basic Assessment.pdf";
    filepath = "./English Certificates/English Language Basic Assessment.pdf";
  }
  if (testTitle === "Intermediate Assessment") {
    filename = "English Language Intermediate Assessment.pdf";
    filepath = "./English Certificates/English Language Intermediate Assessment.pdf";
  }
  if (testTitle === "Advanced Assessment") {
    filename = "English Language Advanced Assessment.pdf";
    filepath = "./English Certificates/English Language Advanced Assessment.pdf";
  }

  try {
    await sendCert(filename, filepath, email).then(() => {
      res.send({ message: "An email has been sent to you" });
      console.log("An email has been sent to you");
    });
  } catch (e) {
    console.log(e);
  }
});